import Image from "next/image";

const Certificates = () => {
  return (
    <div className="bg-white w-full h-auto py-10 mb-10 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#ff9000]">
          Chứng Chỉ Của Tim
        </h2>
        <p className="text-lg sm:text-xl  text-gray-900 mt-2">
          Những thành tựu và chứng nhận đáng tự hào
        </p>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {/* Chứng chỉ 1 */}
          <div className="group w-full sm:w-[50%] lg:w-[45%] aspect-[4/3] relative shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition-all duration-300">
            {/* Ảnh */}
            <Image
              src="/images/SITETIMNGUYEN/GOODDEAL/chungchi1.png"
              alt="Certificate of Recognition"
              layout="fill"
              className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 cursor-pointer"
            />
            {/* Overlay và Text */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500">
              <div className="absolute bottom-0 inset-x-0 p-6 text-center transition-all duration-500 group-hover:bottom-1/2 group-hover:transform group-hover:-translate-y-1/2">
                <p className="text-white text-xl sm:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Giấy chứng nhận
                </p>
              </div>
            </div>
          </div>

          {/* Chứng chỉ 2 */}
          <div className="group w-full sm:w-[50%] lg:w-[45%] aspect-[4/3] relative shadow-lg hover:shadow-2xl rounded-lg overflow-hidden transition-all duration-300">
            {/* Ảnh */}
            <Image
              src="/images/SITETIMNGUYEN/GOODDEAL/chungchi2.png"
              alt="IAPDA Certified Debt Specialist"
              layout="fill"
              className="object-cover group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 cursor-pointer"
            />
            {/* Overlay và Text */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500">
              <div className="absolute bottom-0 inset-x-0 p-6 text-center transition-all duration-500 group-hover:bottom-1/2 group-hover:transform group-hover:-translate-y-1/2">
                <p className="text-white text-xl sm:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  Chuyên gia về nợ được chứng nhận IAPDA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;