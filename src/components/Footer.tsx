import FooterLogo from "../assets/FooterLogo.png";

const Footer = () => {
    return <>

    <div className="flex flex-col sm:flex-row justify-between px-12 py-10 ">
      {/* LEFT SIDE FOOTER */}
      <div className="flex items-center">
        <img draggable="false" src={FooterLogo} alt="ZK Email Footer Logo" />
      </div>

      {/* RIGHT SIDE FOOTER */}
      <div className="flex flex-row justify-between gap-6 mt-[25px] sm:mt-[0px]">

        <div className="flex flex-col gap-3">
          <h4 className="bold">Developers</h4>
          <a href='/' className="text-[#A8A8A8] font-400">Docs</a>
          <a href='/' className="text-[#A8A8A8] font-400">Projects</a>
        </div>

        <div className="flex flex-col gap-3  ml-4">
          <h4 className="bold">Developers</h4>
          <a href='/' className="text-[#A8A8A8] font-400">Blogs</a>
          <a href='/' className="text-[#A8A8A8] font-400 whitespace-nowrap">Learn More</a>
          <a href='/' className="text-[#A8A8A8] font-400">Partner</a>
        </div>

        {/* ICON LINKS */}
        <div className="flex flex-row gap-3 ml-4">
          <a href='/https://x.com/zkemail?lang=en' target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path d="M13.7773 14.54L8.88672 6.85403L13.7125 1.54543C13.8216 1.42241 13.8779 1.26132 13.8691 1.09709C13.8602 0.932868 13.787 0.778743 13.6653 0.668135C13.5436 0.557526 13.3832 0.499347 13.2189 0.506213C13.0546 0.513078 12.8996 0.584434 12.7875 0.70481L8.19063 5.76106L5.02735 0.789966C4.97094 0.70118 4.89304 0.628068 4.80086 0.577402C4.70867 0.526735 4.60519 0.500155 4.5 0.500122H0.750005C0.637943 0.500068 0.527928 0.530143 0.431479 0.5872C0.33503 0.644257 0.255696 0.726195 0.201784 0.824436C0.147871 0.922677 0.121363 1.03361 0.125036 1.14561C0.128709 1.25761 0.162428 1.36656 0.222661 1.46106L5.11329 9.14622L0.287505 14.4587C0.231151 14.5193 0.187372 14.5904 0.158706 14.668C0.13004 14.7455 0.117057 14.828 0.120509 14.9107C0.123962 14.9933 0.143781 15.0744 0.178819 15.1493C0.213856 15.2243 0.263415 15.2915 0.324622 15.3471C0.385829 15.4027 0.457468 15.4457 0.535387 15.4734C0.613305 15.5011 0.695953 15.5131 0.77854 15.5087C0.861127 15.5042 0.942012 15.4834 1.0165 15.4475C1.091 15.4116 1.15762 15.3612 1.2125 15.2993L5.80938 10.2431L8.97266 15.2142C9.02953 15.3022 9.10763 15.3746 9.19979 15.4246C9.29194 15.4745 9.39518 15.5005 9.50001 15.5001H13.25C13.3619 15.5001 13.4718 15.47 13.5682 15.413C13.6645 15.356 13.7437 15.2741 13.7976 15.176C13.8515 15.0779 13.8781 14.9671 13.8745 14.8552C13.8709 14.7433 13.8374 14.6345 13.7773 14.54ZM9.84297 14.2501L1.88829 1.75012H4.15391L12.1117 14.2501H9.84297Z" fill="#F5F3EF"/>
            </svg>
          </a>
          <a href="https://t.me/zkemail" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.8469 9.47981L9.09685 6.97981C9.00271 6.917 8.89327 6.88093 8.78022 6.87545C8.66718 6.86997 8.55476 6.8953 8.45499 6.94872C8.35521 7.00213 8.27181 7.08164 8.21369 7.17876C8.15556 7.27587 8.1249 7.38695 8.12498 7.50013V12.5001C8.1249 12.6133 8.15556 12.7244 8.21369 12.8215C8.27181 12.9186 8.35521 12.9981 8.45499 13.0515C8.55476 13.105 8.66718 13.1303 8.78022 13.1248C8.89327 13.1193 9.00271 13.0833 9.09685 13.0204L12.8469 10.5204C12.9326 10.4634 13.0029 10.386 13.0515 10.2953C13.1001 10.2045 13.1256 10.1031 13.1256 10.0001C13.1256 9.89715 13.1001 9.79576 13.0515 9.70499C13.0029 9.61422 12.9326 9.53687 12.8469 9.47981ZM9.37498 11.3322V8.672L11.3734 10.0001L9.37498 11.3322ZM18.307 5.43138C18.2334 5.14336 18.0924 4.87699 17.8955 4.65421C17.6987 4.43144 17.4517 4.25866 17.175 4.15013C14.4969 3.11575 10.2344 3.12513 9.99998 3.12513C9.7656 3.12513 5.5031 3.11575 2.82498 4.15013C2.54823 4.25866 2.30125 4.43144 2.10443 4.65421C1.9076 4.87699 1.76656 5.14336 1.69295 5.43138C1.4906 6.21106 1.24998 7.63606 1.24998 10.0001C1.24998 12.3642 1.4906 13.7892 1.69295 14.5689C1.76645 14.857 1.90744 15.1236 2.10427 15.3465C2.30111 15.5694 2.54814 15.7423 2.82498 15.8509C5.3906 16.8408 9.40623 16.8751 9.94841 16.8751H10.0515C10.5937 16.8751 14.6117 16.8408 17.175 15.8509C17.4518 15.7423 17.6988 15.5694 17.8957 15.3465C18.0925 15.1236 18.2335 14.857 18.307 14.5689C18.5094 13.7876 18.75 12.3642 18.75 10.0001C18.75 7.63606 18.5094 6.21106 18.307 5.43138ZM17.0969 14.2595C17.073 14.3554 17.0269 14.4442 16.9621 14.5187C16.8973 14.5933 16.8158 14.6514 16.7242 14.6884C14.2515 15.6431 10.0461 15.6259 10.0054 15.6259H9.99998C9.95779 15.6259 5.75545 15.6415 3.28123 14.6884C3.18964 14.6514 3.10812 14.5933 3.04334 14.5187C2.97857 14.4442 2.93238 14.3554 2.90857 14.2595C2.71873 13.5462 2.49998 12.2322 2.49998 10.0001C2.49998 7.76809 2.71873 6.45403 2.9031 5.74466C2.92647 5.64824 2.97245 5.55876 3.03726 5.48364C3.10206 5.40851 3.18381 5.34989 3.27576 5.31263C5.66013 4.39153 9.65545 4.37513 9.98279 4.37513H10.0039C10.0461 4.37513 14.2523 4.36106 16.7226 5.31263C16.8142 5.34959 16.8957 5.40773 16.9605 5.48228C17.0253 5.55684 17.0715 5.64568 17.0953 5.74153C17.2812 6.45403 17.5 7.76809 17.5 10.0001C17.5 12.2322 17.2812 13.5462 17.0969 14.2556V14.2595Z" fill="#F5F3EF"/>
            </svg>
          </a>
          <a href="https://t.me/zkemail" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.8813 2.04626C17.7844 1.96264 17.6666 1.90702 17.5405 1.88541C17.4144 1.8638 17.2848 1.877 17.1656 1.9236L1.33283 8.11969C1.10845 8.20695 0.918478 8.36473 0.791525 8.56929C0.664573 8.77386 0.607509 9.01412 0.628924 9.25392C0.65034 9.49372 0.749076 9.72008 0.910267 9.89891C1.07146 10.0777 1.28638 10.1994 1.52268 10.2455L5.62502 11.0509V15.6252C5.62421 15.8743 5.69826 16.118 5.83755 16.3245C5.97685 16.5311 6.17498 16.6911 6.40627 16.7838C6.6372 16.8781 6.89116 16.9007 7.13513 16.8487C7.3791 16.7968 7.60179 16.6726 7.77424 16.4923L9.75237 14.4408L12.8906 17.1877C13.1171 17.3885 13.4091 17.4996 13.7117 17.5002C13.8444 17.5001 13.9762 17.4792 14.1024 17.4384C14.3086 17.373 14.494 17.2547 14.6403 17.0953C14.7866 16.9359 14.8885 16.7409 14.936 16.5299L18.1071 2.73454C18.1354 2.61012 18.1294 2.48033 18.0896 2.35908C18.0498 2.23783 17.9778 2.12969 17.8813 2.04626ZM13.1047 4.85876L6.10549 9.87125L2.23049 9.1111L13.1047 4.85876ZM6.87502 15.6252V11.9158L8.81174 13.6142L6.87502 15.6252ZM13.7133 16.2502L7.25393 10.5861L16.5508 3.92282L13.7133 16.2502Z" fill="#F5F3EF"/>
            </svg>
          </a>
          <a href="https://github.com/zkemail" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.2742 5.91263C16.4653 5.29638 16.5265 4.64723 16.4542 4.00611C16.3819 3.36499 16.1775 2.74582 15.8539 2.18763C15.799 2.0926 15.7201 2.01369 15.6251 1.95883C15.53 1.90397 15.4222 1.87511 15.3125 1.87513C14.5845 1.87361 13.8663 2.04237 13.2151 2.36793C12.564 2.6935 11.9981 3.16683 11.5625 3.75013H9.6875C9.25193 3.16683 8.68598 2.6935 8.03485 2.36793C7.38372 2.04237 6.66548 1.87361 5.9375 1.87513C5.82777 1.87511 5.71996 1.90397 5.62492 1.95883C5.52988 2.01369 5.45096 2.0926 5.39609 2.18763C5.07254 2.74582 4.86814 3.36499 4.7958 4.00611C4.72346 4.64723 4.78474 5.29638 4.97578 5.91263C4.58963 6.58663 4.38278 7.34839 4.375 8.12513V8.75013C4.37632 9.80763 4.76021 10.8289 5.4558 11.6255C6.15139 12.422 7.11169 12.94 8.15938 13.0837C7.73173 13.631 7.4996 14.3056 7.5 15.0001V15.6251H5.625C5.12772 15.6251 4.65081 15.4276 4.29917 15.076C3.94754 14.7243 3.75 14.2474 3.75 13.7501C3.75 13.3398 3.66917 12.9334 3.51212 12.5542C3.35508 12.1751 3.12489 11.8306 2.83471 11.5404C2.54453 11.2502 2.20003 11.0201 1.82089 10.863C1.44174 10.706 1.03538 10.6251 0.625 10.6251C0.45924 10.6251 0.300269 10.691 0.183058 10.8082C0.065848 10.9254 0 11.0844 0 11.2501C0 11.4159 0.065848 11.5749 0.183058 11.6921C0.300269 11.8093 0.45924 11.8751 0.625 11.8751C1.12228 11.8751 1.59919 12.0727 1.95083 12.4243C2.30246 12.7759 2.5 13.2529 2.5 13.7501C2.5 14.5789 2.82924 15.3738 3.41529 15.9598C4.00134 16.5459 4.7962 16.8751 5.625 16.8751H7.5V18.1251C7.5 18.2909 7.56585 18.4499 7.68306 18.5671C7.80027 18.6843 7.95924 18.7501 8.125 18.7501C8.29076 18.7501 8.44973 18.6843 8.56694 18.5671C8.68415 18.4499 8.75 18.2909 8.75 18.1251V15.0001C8.75 14.5029 8.94754 14.0259 9.29917 13.6743C9.65081 13.3227 10.1277 13.1251 10.625 13.1251C11.1223 13.1251 11.5992 13.3227 11.9508 13.6743C12.3025 14.0259 12.5 14.5029 12.5 15.0001V18.1251C12.5 18.2909 12.5658 18.4499 12.6831 18.5671C12.8003 18.6843 12.9592 18.7501 13.125 18.7501C13.2908 18.7501 13.4497 18.6843 13.5669 18.5671C13.6842 18.4499 13.75 18.2909 13.75 18.1251V15.0001C13.7504 14.3056 13.5183 13.631 13.0906 13.0837C14.1383 12.94 15.0986 12.422 15.7942 11.6255C16.4898 10.8289 16.8737 9.80763 16.875 8.75013V8.12513C16.8672 7.34839 16.6604 6.58663 16.2742 5.91263ZM15.625 8.75013C15.625 9.57893 15.2958 10.3738 14.7097 10.9598C14.1237 11.5459 13.3288 11.8751 12.5 11.8751H8.75C7.9212 11.8751 7.12634 11.5459 6.54029 10.9598C5.95424 10.3738 5.625 9.57893 5.625 8.75013V8.12513C5.63266 7.50015 5.81978 6.89054 6.16406 6.36888C6.22824 6.28429 6.26981 6.18474 6.28485 6.07962C6.29988 5.97451 6.28789 5.8673 6.25 5.7681C6.0872 5.34825 6.00886 4.90041 6.01945 4.45023C6.03004 4.00005 6.12936 3.55639 6.31172 3.14466C6.82322 3.19969 7.31577 3.36913 7.75287 3.64042C8.18997 3.91172 8.5604 4.27791 8.83672 4.71185C8.89303 4.7999 8.97051 4.87243 9.06209 4.92279C9.15368 4.97315 9.25642 4.99974 9.36094 5.00013H11.8883C11.9932 5.00014 12.0964 4.97373 12.1884 4.92335C12.2805 4.87297 12.3583 4.80024 12.4148 4.71185C12.6911 4.27787 13.0615 3.91165 13.4986 3.64035C13.9358 3.36905 14.4283 3.19963 14.9398 3.14466C15.122 3.55649 15.221 4.00021 15.2313 4.45039C15.2417 4.90057 15.163 5.34836 15 5.7681C14.9622 5.86635 14.9496 5.97247 14.9632 6.07684C14.9769 6.18121 15.0164 6.28052 15.0781 6.36576C15.4258 6.88742 15.6157 7.49828 15.625 8.12513V8.75013Z" fill="#F5F3EF"/>
            </svg>
          </a>
        </div>
      </div>

    </div>
    
    </>;
  };
  
  export default Footer;
  