import Button from "../../../components/ui/button";

export default function HeaderCTA() {
  return (
    <ul className="space-y-4 lg:flex lg:items-center lg:gap-10 lg:space-y-0">
      <li className="text-center font-semibold text-white p-3 text-lg lg:p-0 lg:text-gray-600 lg:hover:text-gray-900 transition-all cursor-pointer lg:text-base">Login</li>
      <li>
        <Button className="font-semibold text-lg h-auto p-3 lg:px-6 lg:text-base">Sign Up</Button>
      </li>
    </ul>
  );
}
