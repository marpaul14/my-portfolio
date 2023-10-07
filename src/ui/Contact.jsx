function Contact() {
  return (
    <div
      name="contact"
      className="bg-[#D3D3D3] w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/66fdaf41-87cf-405e-8171-2297ecd141a2"
        className="flex flex-col max-w-[400px] w-full sm:max-w-[600px] pt-20 sm:pt-3"
      >
        <div className="pb-2 sm:pb-8 text-center">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-[#0a192f] text-#0a192f  hover:text-yellow-800 duration-1000 hover:cursor-default hover:border-yellow-800">
            Contact me here:
          </p>
          <p className="text-[#0a192f] text-base sm:text-xl pt-2 sm:pt-4 hover:text-yellow-800 hover:cursor-default">
            Submit the form below or shoot me an email -
            <span className="hover:italic">marpauljaybunani1314@gmail.com</span>
          </p>
        </div>
        <input
          className="bg-[#0a192f] p-2 text-white"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#0a192f]  text-white"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#0a192f] p-2  text-white"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          className="text-[#0a192f] border-2 border-[#0a192f] hover:bg-[#0a192f] hover:text-white
         hover:font-bold px-4 py-1 sm:py-3 my-2 sm:my-8 mx-auto flex items-center"
        >
          Let&apos;s Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
