import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center border-b-2">
      <h1 className="text-5xl text-red-400">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
