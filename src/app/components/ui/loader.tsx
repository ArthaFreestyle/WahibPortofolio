// pages/gallery.tsx



export default function Gallery({ folderImages }: { folderImages: FolderImages[] }) {
  return (
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
                  width={150}
                  height={150}
                  className="object-cover h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}