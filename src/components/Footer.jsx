const Footer = () => {
  return (
    <div>
      <footer className="relative text-white">
        <img
          src="https://assets.website-files.com/646603af5972c5339c9b35dc/64663a56dbf56a2c0cc7e257_Background%20Image1.svg"
          alt=""
          className="absolute inset-[0%] -z-[1] inline-block h-full w-full object-cover"
        />
        {/* Container  */}
        <div className="mx-auto w-full max-w-7xl px-5 pt-10">
          {/* Component  */}
          <div className="flex flex-col items-center">
            {/* Logo  */}
            <a href="#">
              <img
                src="https://i.ibb.co/ZHTVVTP/Stream-Vibe.png"
                alt=""
                className="inline-block max-h-10"
              />
            </a>
            <p className="mx-auto mt-4 max-w-[528px] text-center text-[#636262]">
              With StreamVibe, you can enjoy your favorite movies and TV shows
              anytime, anywhere. Our platform is designed to be compatible with
              a wide range of devices, ensuring that you never miss a moment of
              entertainment.
            </p>
            {/* Footer Links  */}
            <div className="mt-5 mb-10  text-center font-semibold">
              <a
                href="#"
                className="inline-block px-6 py-2 text-white transition [border-bottom:1px_solid_rgba(0,_0,_0,_0)] hover:text-white hover:[border-bottom:1px_solid_rgb(201,_253,_2)]"
              >
                About
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 text-white transition [border-bottom:1px_solid_rgba(0,_0,_0,_0)] hover:text-white hover:[border-bottom:1px_solid_rgb(201,_253,_2)]"
              >
                Movies
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 text-white transition [border-bottom:1px_solid_rgba(0,_0,_0,_0)] hover:text-white hover:[border-bottom:1px_solid_rgb(201,_253,_2)]"
              >
                Shows
              </a>
              <a
                href="#"
                className="inline-block px-6 py-2 text-white transition [border-bottom:1px_solid_rgba(0,_0,_0,_0)] hover:text-white hover:[border-bottom:1px_solid_rgb(201,_253,_2)]"
              >
                Subscription
              </a>
              
            </div>
            <h2>Connect with us with:</h2>
            {/* Social Links  */}
            <div className="mb-16 mt-1 flex gap-7 py-2.5">
              <a
                href="#"
                className="max-w-[24px] text-[#3a3a3a] transition hover:text-[#c9fd02]"
              >
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20.0176C0 31.0633 8.95431 40.0176 20 40.0176C31.0457 40.0176 40 31.0633 40 20.0176C40 8.97188 31.0457 0.0175781 20 0.0175781C8.95431 0.0175781 0 8.97188 0 20.0176Z"
                    fill="#181818"
                  ></path>
                  <path
                    d="M12.5938 13.0019C12.9629 12.9588 13.3255 13.1241 13.5352 13.4309C15.0105 15.5897 16.7826 16.4878 18.7489 16.6921C18.8454 15.8509 19.0724 15.0197 19.4991 14.288C20.125 13.2143 21.143 12.4239 22.5972 12.1318C24.6066 11.7282 26.1366 12.4559 27.0244 13.3471L28.8162 13.0122C29.199 12.9406 29.5884 13.0977 29.8144 13.4148C30.0403 13.7319 30.0617 14.1513 29.8691 14.4897L28.1496 17.5118C28.3064 21.8732 27.0944 24.9169 24.5103 27.0139C23.1395 28.1262 21.178 28.7571 19.0249 28.9519C16.855 29.1482 14.4021 28.9108 11.9638 28.1988C11.536 28.0739 11.2425 27.681 11.2441 27.2354C11.2457 26.7897 11.542 26.3989 11.9706 26.277C13.1968 25.9283 14.1301 25.6268 14.9738 25.1003C13.7753 24.464 12.8923 23.6322 12.2673 22.6839C11.3986 21.3658 11.0765 19.8964 11.0125 18.5711C10.9486 17.2459 11.1401 16.0185 11.3418 15.1327C11.4566 14.6285 11.5907 14.1218 11.7755 13.6379C11.9098 13.2891 12.2246 13.0449 12.5938 13.0019Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              
              
              <a
                href="#"
                className="max-w-[24px] text-[#3a3a3a] transition hover:text-[#c9fd02]"
              >
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20.0176C0 31.0633 8.95431 40.0176 20 40.0176C31.0457 40.0176 40 31.0633 40 20.0176C40 8.97188 31.0457 0.0175781 20 0.0175781C8.95431 0.0175781 0 8.97188 0 20.0176Z"
                    fill="#181818"
                  ></path>
                  <path
                    d="M21.5 29.9059C26.3113 29.1821 30 25.0306 30 20.0176C30 14.4947 25.5228 10.0176 20 10.0176C14.4771 10.0176 10 14.4947 10 20.0176C10 25.0306 13.6887 29.1821 18.5 29.9059V23.0176H17C16.1716 23.0176 15.5 22.346 15.5 21.5176C15.5 20.6892 16.1716 20.0176 17 20.0176H18.5V18.0176C18.5 16.0846 20.067 14.5176 22 14.5176H22.5C23.3284 14.5176 24 15.1891 24 16.0176C24 16.846 23.3284 17.5176 22.5 17.5176H22C21.7239 17.5176 21.5 17.7414 21.5 18.0176V20.0176H23C23.8284 20.0176 24.5 20.6892 24.5 21.5176C24.5 22.346 23.8284 23.0176 23 23.0176H21.5V29.9059Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
