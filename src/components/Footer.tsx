import { LinkedinOutlined, TwitterOutlined } from "@ant-design/icons";
function Footer() {
  return (
    <div className='w-full text-white bg-slate-800 p-3 z-20 mt-5'>
      <div className='max-w-[2000px] xl:px-[150px] md:px-[30px]  lg:px-[90px] sm:px-[20px] justify-between items-center flex flex-col sm:flex-row'>
        <a
          href='#'
          className='w-full flex justify-center sm:justify-start font-bold text-slate-200'
        >
          About us | Privacy Policy | Contact us
        </a>
        <h1 className='w-full flex justify-center text-slate-200'>
          Copyright © 2024- Aryan
        </h1>
        <h1 className='w-full flex justify-center sm:justify-end gap-5'>
          <LinkedinOutlined style={{ fontSize: 30, color: "#0A66C2" }} />
          <TwitterOutlined style={{ fontSize: 30, color: "#1DA1F2" }} />
        </h1>
      </div>
    </div>
  );
}

export default Footer;
