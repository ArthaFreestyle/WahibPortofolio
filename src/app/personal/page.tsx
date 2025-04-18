// src/app/pnp/page.tsx
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

type FolderImages = {
  folderPath: string;
  images: string[];
};

function getAllImages(dir: string, basePath = ''): FolderImages[] {
  // Check if directory exists first
  if (!fs.existsSync(dir)) {
    console.error(`Directory does not exist: ${dir}`);
    return [];
  }

  const result: FolderImages[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const images: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      result.push(...getAllImages(fullPath, relativePath));
    } else if (/\.(jpe?g|png|gif|webp)$/i.test(entry.name)) {
      // Mengubah path gambar agar relatif terhadap folder public
      images.push(`/${relativePath.replace(/\\/g, '/')}`);
    }
  }

  if (images.length > 0) {
    result.push({ folderPath: basePath.replace(/\\/g, '/'), images });
  }

  return result;
}

export default async function PnpPage() {
  try {
    // Mengubah path untuk hanya membaca dari folder petsnplant
    const imageDir = path.join(process.cwd(), 'public/Personal Project');
    const folderImages = getAllImages(imageDir, 'Personal Project');

    if (!folderImages || folderImages.length === 0) {
      return (
        <div className="container mx-auto p-4">
          <p>No images found in petsnplant folder.</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-[#18230F] from-black dark overflow-x-hidden">
        <div className="container mx-auto p-4">
          {folderImages.map((item, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl font-bold mb-3">{item.folderPath || 'Root Folder'}</h3>
              <div className="flex flex-wrap gap-4">
                {item.images.map((img, i) => (
                  <div key={i} className="relative overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={img} 
                      alt={`Image ${i} from ${item.folderPath}`} 
                      width={300}
                      height={300}
                      className="object-cover h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading images:', error);
    return notFound();
  }
}