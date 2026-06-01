import { readdirSync, statSync } from "fs";
import { extname, join } from "path";
import sharp from "sharp";

const IMAGES_DIR = "./assets/images";
const TARGET_EXTS = [".png", ".jpg", ".jpeg"];

const files = readdirSync(IMAGES_DIR).filter((f) =>
    TARGET_EXTS.includes(extname(f).toLowerCase()),
);

for (const file of files) {
    const filePath = join(IMAGES_DIR, file);
    const beforeKB = Math.round(statSync(filePath).size / 1024);

    const image = sharp(filePath);
    const meta = await image.metadata();

    // Skip tiny files (already small enough)
    if (statSync(filePath).size < 100 * 1024) {
        console.log(`⏭  Skipping ${file} (${beforeKB} KB — already small)`);
        continue;
    }

    if (extname(file).toLowerCase() === ".png") {
        await sharp(filePath)
            .png({ compressionLevel: 9, quality: 80 })
            .toFile(filePath + ".tmp");
    } else {
        await sharp(filePath)
            .jpeg({ quality: 80, mozjpeg: true })
            .toFile(filePath + ".tmp");
    }

    // Replace original with compressed
    const { renameSync } = await import("fs");
    renameSync(filePath + ".tmp", filePath);

    const afterKB = Math.round(statSync(filePath).size / 1024);
    const saved = beforeKB - afterKB;
    console.log(
        `✅ ${file}: ${beforeKB} KB → ${afterKB} KB (saved ${saved} KB)`,
    );
}

console.log("\nDone compressing images.");
