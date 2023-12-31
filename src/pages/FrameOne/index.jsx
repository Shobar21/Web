import React from "react";
import { Link } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const FrameOnePage = () => {
  return (
    <>
      <div className="bg-black-900 flex flex-col font-inter items-start justify-start mx-auto sm:pr-5 pr-[23px] py-[23px] w-full">
        <div className="flex flex-col justify-start mb-[197px] md:px-5 w-[88%] md:w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start md:ml-[0] ml-[45px] w-[91%] md:w-full">
            <div className="flex flex-col items-start justify-end sm:pr-5 pr-[21px] pt-[21px]">
              <Text
                className="text-base text-red-A200 tracking-[-0.32px]"
                size="txtInterSemiBold16"
              >
                <span className="text-red-A200 font-inter text-left font-semibold">
                  $
                </span>
                <span className="text-white-A700 font-inter text-left font-semibold">
                  #OB@
                </span>
              </Text>
            </div>
            <Text
              className="md:ml-[0] ml-[217px] text-base text-white-A700 tracking-[-0.32px]"
              size="txtInterSemiBold16WhiteA700"
            >
              Home
            </Text>
            <Text
              className="md:ml-[0] ml-[29px] text-base text-white-A700 tracking-[-0.32px]"
              size="txtInterSemiBold16WhiteA700"
            >
              About
            </Text>
            <Link to="/products">
              <Text
                className="md:ml-[0] ml-[29px] text-base text-white-A700 tracking-[-0.32px]"
                size="txtInterSemiBold16WhiteA700"
              >
                Products
              </Text>
            </Link>
            <Text
              className="ml-7 md:ml-[0] text-base text-white-A700 tracking-[-0.32px]"
              size="txtInterSemiBold16WhiteA700"
            >
              Services
            </Text>
            <Text
              className="md:ml-[0] ml-[18px] text-base text-white-A700 tracking-[-0.32px]"
              size="txtInterSemiBold16WhiteA700"
            >
              Projects
            </Text>
            <Text
              className="md:ml-[0] ml-[29px] text-base text-white-A700 tracking-[-0.32px]"
              size="txtInterSemiBold16WhiteA700"
            >
              Blog
            </Text>
            <Text
              className="md:ml-[0] ml-[29px] text-base text-white-A700 tracking-[-0.32px]"
              size="txtInterSemiBold16WhiteA700"
            >
              Contact
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[65px] mt-[70px] w-[86%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[7px]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px]"
                size="txtInterBold36"
              >
                Hi, I’m Shoba Rohra
              </Text>
              <Text
                className="mt-[19px] text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px]"
                size="txtInterBold36"
              >
                Web Designer
              </Text>
              <Text
                className="leading-[22.00px] mt-0.5 text-[15px] text-white-A700 tracking-[-0.30px] w-full"
                size="txtInterLight15"
              >
                <>
                  Welcome to my web design portfolio! I&#39;m a passionate web
                  designer dedicated to creating visually stunning and
                  user-friendly websites. I&#39;ve had the privilege of
                  collaborating with a diverse range of clients, and I&#39;m
                  excited to bring creativity and innovation to your project.
                </>
              </Text>
              <div className="flex flex-row gap-9 items-center justify-start mt-1.5 w-[70%] md:w-full">
                <Button
                  className="cursor-pointer font-bold min-w-[123px] text-[15px] text-center tracking-[-0.30px]"
                  size="xs"
                >
                  Download cv
                </Button>
                <Button
                  className="border-2 border-red-A200 border-solid cursor-pointer font-bold min-w-[121px] text-[15px] text-center tracking-[-0.30px]"
                  color="black_900"
                  size="xs"
                >
                  Hire me
                </Button>
              </div>
            </div>
            <Img
              className="h-[388px] md:h-auto object-cover"
              src="images/img_rectangle5.png"
              alt="rectangleFive"
            />
          </div>
          <div className="bg-black-900_01 flex flex-col items-start justify-start mt-[65px] p-[72px] md:px-10 sm:px-5 w-full">
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mb-1.5 mt-5 w-[94%] md:w-full">
              <Img
                className="h-[388px] md:h-auto object-cover"
                src="images/img_rectangle5.png"
                alt="rectangleThree"
              />
              <div className="flex flex-col items-start justify-start sm:mt-0 mt-1.5">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                  size="txtInterBold24"
                >
                  Let me Introduce myself
                </Text>
                <Text
                  className="md:ml-[0] ml-[46px] mt-2 text-4xl sm:text-[32px] md:text-[34px] text-red-A200 tracking-[-0.72px]"
                  size="txtInterBold36RedA200"
                >
                  About Me
                </Text>
                <Text
                  className="leading-[22.00px] mt-[5px] text-sm text-white-A700 tracking-[-0.28px] w-full"
                  size="txtInterLight14"
                >
                  <>
                    &quot;Hello, I&#39;m Shoba Rohra, a passionate web designer.
                    I specialize in creating visually appealing and user-centric
                    websites that make a lasting impression. With a keen eye for
                    design and a commitment to delivering excellence, I&#39;m
                    dedicated to transforming your ideas into captivating
                    digital experiences. Let&#39;s collaborate to bring your
                    vision to life and make your online presence shine.&quot;
                  </>
                </Text>
                <Button className="cursor-pointer font-bold min-w-[168px] md:ml-[0] ml-[46px] mt-[21px] text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.48px]">
                  Read More!
                </Button>
              </div>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[283px] mt-[120px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
            size="txtInterSemiBold24"
          >
            What I Will Do For You
          </Text>
          <Text
            className="md:ml-[0] ml-[303px] mt-3 text-4xl sm:text-[32px] md:text-[34px] text-red-A200 tracking-[-0.72px]"
            size="txtInterBold36RedA200"
          >
            Our Services
          </Text>
          <div className="flex flex-col items-end justify-start md:ml-[0] ml-[29px] mt-[183px] w-[90%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-[59px] items-center justify-between mr-[3px] w-full">
              <div className="bg-black-900_01 border border-black-900 border-solid md:h-[480px] h-[482px] relative w-[47%] md:w-full">
                <Img
                  className="absolute h-32 left-[28%] top-[5%]"
                  src="images/img_ellipse1.svg"
                  alt="ellipseOne"
                />
                <Img
                  className="absolute h-32 left-[24%] object-cover top-[5%] w-[47%]"
                  src="images/img_image1.png"
                  alt="imageOne"
                />
                <div className="absolute bottom-[9%] flex flex-col gap-7 inset-x-[0] justify-start mx-auto w-[74%]">
                  <div className="flex flex-col gap-1.5 justify-start w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px]"
                      size="txtInterSemiBold32"
                    >
                      Graphic Designer
                    </Text>
                    <Text
                      className="leading-[22.00px] md:ml-[0] ml-[25px] text-base text-white-A700 tracking-[-0.32px] w-[86%] sm:w-full"
                      size="txtInterSemiBold16WhiteA700"
                    >
                      Elevate Your Brand with Stunning Graphic Design Services.
                      Transforming Ideas into Visual Brilliance, Graphic Design
                      Excellence: Bringing Your Ideas to Life
                    </Text>
                  </div>
                  <div className="bg-red-A200 flex flex-col items-center justify-end md:ml-[0] ml-[25px] mr-[67px] p-3">
                    <Text
                      className="mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtInterBold24"
                    >
                      Read More!
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-black-900_01 border border-black-900 border-solid md:h-[480px] h-[482px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="absolute h-32 left-[28%] top-[5%]"
                    src="images/img_ellipse1.svg"
                    alt="ellipseOne_One"
                  />
                  <Img
                    className="absolute h-32 left-[24%] object-cover top-[5%] w-[47%]"
                    src="images/img_image1.png"
                    alt="imageOne_One"
                  />
                  <div className="absolute bottom-[9%] flex flex-col gap-7 inset-x-[0] justify-start mx-auto w-[74%]">
                    <div className="flex flex-col gap-1.5 justify-start w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px]"
                        size="txtInterSemiBold32"
                      >
                        Graphic Designer
                      </Text>
                      <Text
                        className="leading-[22.00px] md:ml-[0] ml-[25px] text-base text-white-A700 tracking-[-0.32px] w-[86%] sm:w-full"
                        size="txtInterSemiBold16WhiteA700"
                      >
                        Elevate Your Brand with Stunning Graphic Design
                        Services. Transforming Ideas into Visual Brilliance,
                        Graphic Design Excellence: Bringing Your Ideas to Life
                      </Text>
                    </div>
                    <div className="bg-red-A200 flex flex-col items-center justify-end md:ml-[0] ml-[25px] mr-[67px] p-3">
                      <Text
                        className="mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                        size="txtInterBold24"
                      >
                        Read More!
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-black-900_01 border border-black-900 border-solid flex flex-col gap-[17px] h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 w-full">
                    <div className="h-32 relative w-[55%]">
                      <Img
                        className="absolute h-32 inset-[0] justify-center m-auto"
                        src="images/img_ellipse1.svg"
                        alt="ellipseOne_Two"
                      />
                      <Img
                        className="absolute h-32 inset-[0] justify-center m-auto object-cover w-full"
                        src="images/img_image1.png"
                        alt="imageOne_Two"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mb-[19px] w-[74%] md:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px]"
                        size="txtInterSemiBold32"
                      >
                        Web Designer
                      </Text>
                      <Text
                        className="leading-[22.00px] mt-1.5 text-base text-white-A700 tracking-[-0.32px] w-full"
                        size="txtInterSemiBold16WhiteA700"
                      >
                        Elevate Your Brand with Stunning Graphic Design
                        Services. Transforming Ideas into Visual Brilliance,
                        Graphic Design Excellence: Bringing Your Ideas to Life
                      </Text>
                      <Button className="cursor-pointer font-bold min-w-[168px] mt-7 text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.48px]">
                        Read More!
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-black-900_01 border border-black-900 border-solid md:h-[479px] h-[482px] relative w-[47%] md:w-full">
                <div className="flex flex-col gap-7 h-full justify-start mt-6 mx-auto w-[74%]">
                  <div className="flex flex-col justify-start w-full">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-32 items-center justify-start md:ml-[0] ml-[58px] p-[37px] sm:px-5 w-[54%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_ellipse1.svg')",
                      }}
                    >
                      <Img
                        className="h-[46px] md:h-auto mb-[7px] object-cover w-[90%]"
                        src="images/img_image2.png"
                        alt="imageTwo"
                      />
                    </div>
                    <Text
                      className="mt-[17px] md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px]"
                      size="txtInterSemiBold32"
                    >
                      Graphic Designer
                    </Text>
                    <Text
                      className="leading-[22.00px] md:ml-[0] ml-[25px] mt-1.5 text-base text-white-A700 tracking-[-0.32px] w-[86%] sm:w-full"
                      size="txtInterSemiBold16WhiteA700"
                    >
                      Elevate Your Brand with Stunning Graphic Design Services.
                      Transforming Ideas into Visual Brilliance, Graphic Design
                      Excellence: Bringing Your Ideas to Life
                    </Text>
                  </div>
                  <div className="bg-red-A200 flex flex-col items-center justify-end md:ml-[0] ml-[25px] mr-[67px] p-3">
                    <Text
                      className="mt-[5px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtInterBold24"
                    >
                      Read More!
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-black-900_01 border border-black-900 border-solid flex flex-col gap-[17px] h-full inset-[0] items-center justify-center m-auto p-6 sm:px-5 w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-32 items-center justify-start p-[37px] sm:px-5 w-[46%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_ellipse1.svg')",
                    }}
                  >
                    <Img
                      className="h-[46px] md:h-auto mb-[7px] object-cover w-[90%]"
                      src="images/img_image2.png"
                      alt="imageTwo_One"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[19px] w-3/4 md:w-full">
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px]"
                      size="txtInterSemiBold32"
                    >
                      Web Designer
                    </Text>
                    <Text
                      className="leading-[22.00px] md:ml-[0] ml-[5px] mt-1.5 text-base text-white-A700 tracking-[-0.32px] w-[98%] sm:w-full"
                      size="txtInterSemiBold16WhiteA700"
                    >
                      Elevate Your Brand with Stunning Graphic Design Services.
                      Transforming Ideas into Visual Brilliance, Graphic Design
                      Excellence: Bringing Your Ideas to Life
                    </Text>
                    <Button className="cursor-pointer font-bold min-w-[168px] md:ml-[0] ml-[5px] mt-7 text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.48px]">
                      Read More!
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[47px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[132px] w-[99%]"
              orientation="horizontal"
            >
              <div className="bg-black-900_01 border border-black-900 border-solid flex flex-col gap-[17px] items-center justify-start p-6 sm:px-5 w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-32 items-end justify-start p-[25px] sm:px-5 w-[46%] md:w-full"
                  style={{ backgroundImage: "url('images/img_ellipse1.svg')" }}
                >
                  <Img
                    className="h-[69px] md:h-auto my-[3px] object-cover w-[69px]"
                    src="images/img_image3.png"
                    alt="imageThree"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mb-[19px] w-[74%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px]"
                    size="txtInterSemiBold32"
                  >
                    Web Designer
                  </Text>
                  <Text
                    className="leading-[22.00px] mt-1.5 text-base text-white-A700 tracking-[-0.32px] w-full"
                    size="txtInterSemiBold16WhiteA700"
                  >
                    Elevate Your Brand with Stunning Graphic Design Services.
                    Transforming Ideas into Visual Brilliance, Graphic Design
                    Excellence: Bringing Your Ideas to Life
                  </Text>
                  <Button className="cursor-pointer font-bold min-w-[168px] mt-7 text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.48px]">
                    Read More!
                  </Button>
                </div>
              </div>
              <div className="bg-black-900_01 border border-black-900 border-solid flex flex-col gap-[17px] items-center justify-start p-6 sm:px-5 w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-32 items-center justify-end p-[17px] w-[46%] md:w-full"
                  style={{ backgroundImage: "url('images/img_ellipse1.svg')" }}
                >
                  <Img
                    className="h-[88px] md:h-auto mt-[5px] object-cover w-[91%]"
                    src="images/img_image5.png"
                    alt="imageFive"
                  />
                </div>
                <div className="flex flex-col items-start justify-start mb-[19px] w-[74%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px]"
                    size="txtInterSemiBold32"
                  >
                    Web Designer
                  </Text>
                  <Text
                    className="leading-[22.00px] mt-1.5 text-base text-white-A700 tracking-[-0.32px] w-full"
                    size="txtInterSemiBold16WhiteA700"
                  >
                    Elevate Your Brand with Stunning Graphic Design Services.
                    Transforming Ideas into Visual Brilliance, Graphic Design
                    Excellence: Bringing Your Ideas to Life
                  </Text>
                  <Button className="cursor-pointer font-bold min-w-[168px] mt-7 text-2xl md:text-[22px] text-center sm:text-xl tracking-[-0.48px]">
                    Read More!
                  </Button>
                </div>
              </div>
            </List>
            <Text
              className="mt-[154px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
              size="txtInterSemiBold24"
            >
              What I Will Do For You
            </Text>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-end mt-[205px] w-[96%] md:w-full">
              <Img
                className="h-[214px] sm:h-auto object-cover w-[47%] md:w-full"
                src="images/img_image8.png"
                alt="imageEight"
              />
              <Img
                className="h-[214px] sm:h-auto object-cover w-[46%] md:w-full"
                src="images/img_image7.png"
                alt="imageSeven"
              />
            </div>
            <div className="flex md:flex-col flex-row gap-[54px] items-start justify-end mt-[92px] w-[95%] md:w-full">
              <Img
                className="h-[214px] sm:h-auto md:mt-0 mt-2.5 object-cover w-[47%] md:w-full"
                src="images/img_image9.png"
                alt="imageNine"
              />
              <Img
                className="h-[214px] sm:h-auto mb-2.5 object-cover w-[46%] md:w-full"
                src="images/img_image10.png"
                alt="imageTen"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameOnePage;
