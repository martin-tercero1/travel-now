import FooterListItem from "./FooterListItem"
import Icon from "../utils/Icon";

function Footer() {
  return (
    <footer
      id="about-us"
      className="w-full bg-gray-50 pb-24 lg:pb-10 pt-4 px-6 space-y-2 "
    >
      <p className="text-lg">About Us</p>
      <FooterListItem item={"Investors"} />
      <FooterListItem item={"Jobs"} />
      <FooterListItem item={"Privacy policy"} />
      <FooterListItem item={"Terms and conditions"} />
      <FooterListItem item={"Investors"} />
      <FooterListItem item={"Platzi Travel, inc"} />
      <FooterListItem item={"Follow Us"} />
      <div className="flex space-x-2">
        <Icon icon={"x"}/>
        <Icon icon={"instagram"}/>
      </div>
    </footer>
  );
}

export default Footer