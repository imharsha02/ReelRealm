
import { promises as fs } from 'fs';
import path from 'path';

async function uploadThumbnail(file:File) {
    // Define the path where images are stored and accessed
    const publicDirectory = path.join(process.cwd(), 'public', 'thumbnails');
    const filePath = path.join(publicDirectory, file.name);

    // Check if the file already exists in the public directory
        await fs.access(filePath);
        // If the file exists, return its public URL
        return `/thumbnails/${file.name}`;
}

export default uploadThumbnail;