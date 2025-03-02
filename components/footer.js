import { Facebook, Instagram, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f3f0eb] py-8 px-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Explore */}
        <div>
          <h3 className="text-[#304561] text-[28px] font-medium">Explore</h3>
          {[
            "Style Quiz",
            "Financing",
            "Gift Cards",
            "Refer & Earn",
            "Help Center",
            "Promotions",
          ].map((item, index) => (
            <p key={index} className="text-[16px] text-[#362b24]">{item}</p>
          ))}
        </div>

        {/* In-Person */}
        <div>
          <h3 className="text-[#304561] text-[28px] font-medium">In-Person</h3>
          {["Austin", "Boston", "Charlotte", "Chicago", "Dallas", "Denver", "Houston"].map((city, index) => (
            <p key={index} className="text-[16px] text-[#362b24]">{city}</p>
          ))}
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-[#304561] text-[28px] font-medium">Locations</h3>
          {["Los Angeles", "New York", "Philadelphia", "Seattle", "Washington DC", "View All Locations"].map((location, index) => (
            <p key={index} className="text-[16px] text-[#362b24]">{location}</p>
          ))}
        </div>

        {/* Our Brand */}
        <div>
          <h3 className="text-[#304561] text-[28px] font-medium">Our Brand</h3>
          {["Interior Define", "The Citizenry", "The Inside", "St. Frank"].map((brand, index) => (
            <p key={index} className="text-[16px] text-[#362b24]">{brand}</p>
          ))}
          <h3 className="text-[#304561] text-[28px] font-medium mt-4">Contact</h3>
          <p className="text-[16px] text-[#362b24]">Email: hello@Erikaluxedesign.com</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-[#304561] text-[28px] font-medium">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <Facebook className="w-8 h-8 text-[#362b24]" />
            <X className="w-8 h-8 text-[#362b24]" />
            <Instagram className="w-8 h-8 text-[#362b24]" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-[#beac9e] text-sm">
        <p>2025 Havenly Inc., All Rights Reserved.</p>
        <p className="text-center md:text-right">
          Find us in the App Store | Privacy Policy | Terms of Service | ADA Accessibility | Do Not Sell My Personal Information
        </p>
      </div>
    </footer>
  );
}