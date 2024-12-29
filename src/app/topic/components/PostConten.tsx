import Image from "next/image";

type ContentDetail = {
  type: "text" | "image" | "bold";
  value: string;
};

type ContentSection = {
  section_title: string;
  details: (ContentDetail | string)[] | string;
  image?: string;
};

type PostContentProps = {
  content: ContentSection[];
  conclusion?: string;
};

export default function PostContent({ content, conclusion }: PostContentProps) {
  return (
    <div className="space-y-8">
      {content.map((section, index) => (
        <div key={index}>
          {/* Tiêu đề */}
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            {section.section_title}
          </h2>

          {/* Nội dung */}
          {Array.isArray(section.details) ? (
            section.details.map((detail, idx) => {
              if (typeof detail === "string") {
                
                return (
                  <p key={idx} className="text-base text-gray-700 leading-relaxed">
                    {detail}
                  </p>
                );
              }
              if (detail.type === "text") {
                return (
                  <p key={idx} className="text-base text-gray-700 leading-relaxed">
                    {detail.value}
                  </p>
                );
              }

              if (detail.type === "bold") {
                return (
                  <span key={idx} className="text-base text-gray-900 font-semibold">
                    {detail.value}
                  </span>
                );
              }

              if (detail.type === "image") {
                
                return (
                  <div key={idx} className="my-4 flex justify-center">
                    <Image
                      src={detail.value}
                      alt={section.section_title}
                      width={800}
                      height={500}
                      className="rounded-lg"
                    />
                  </div>
                );
              }

              return null; 
            })
          ) : (
            <p className="text-base text-gray-700 leading-relaxed">{section.details}</p>
          )}

          {section.image && (
            <div className="my-4 flex justify-center">
              <Image
                src={section.image}
                alt={section.section_title}
                width={800}
                height={500}
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      ))}

      {conclusion && (
        <div className="mt-8">
          <p className="text-lg font-bold text-gray-900">{conclusion}</p>
        </div>
      )}
    </div>
  );
}
