import {
  LaptopSide,
  TvSide,
  PhoneSide,
  WearableSide,
  AppliancesSide,
  CameraSide,
  IpadSide,
  HeadphonesSide,
  NetworkSide,
  studentDeal,
  LaborDeal,
  PhoneImg,
  headphoneImg,
  IpadImg,
  LaptopImg,
  SmartWatchImg,
  TvImg,
  Cart,
  Wishlist,
  Account,
  Compare,
  Tv,
  Laptop,
  Printer,
  Ipad,
  Phones,
  Headphone,
  Networking,
  Wearable,
  SmartHome,
  Camera,
  Arrow,
  LaptopLight,
  TvLight,
  CellPhonesLight,
  WearableLight,
  AppliancesLight,
  CamerasLight,
  IpadsLight,
  HeadphonesLight,
  NetworkingLight,
  LapBanner,
  TVBanner,
  CleanBanner,
  TabBanner,
} from "../Assets/index";

export const navLinks = [
  {
    to: "/account",
    name: "Account",
    icon: Account,
  },
  {
    to: "/compare",
    name: "Compare",
    icon: Compare,
  },
  {
    to: "/wishlist",
    name: "Wishlist",
    icon: Wishlist,
  },
  {
    to: "/cart",
    name: "Cart",
    icon: Cart,
  },
];

export const sidebarHeaderLinks = [
  {
    name: "Compare",
    icon: Compare,
  },
  {
    name: "Wishlist",
    icon: Wishlist,
  },
  {
    name: "Cart",
    icon: Cart,
  },
];
export const sidebarLinks = [
  {
    name: "Tvs & Video",
    icon: Tv,
    icon2: Arrow,
    list: [
      "Home Theater Systems",
      "Sound Bars",
      "Streaming Devices",
      "TV Accessories",
      "TV Cables & Adapters",
      "TV Stands & Entertainment Centers",
      "TV Wall Mounts",
      "TVs",
    ],
  },
  {
    name: "Laptops & Computers",
    icon: Laptop,
    icon2: Arrow,
    list: [
      "Accessories",
      "Chromebook",
      "Components",
      "Desktops",
      "Laptops",
      "Monitors",
      "Networking",
      "PC Gaming",
      "Printers & Ink",
      "Software",
    ],
  },
  {
    name: "iPads & Tablets",
    icon: Ipad,
    icon2: Arrow,
    list: [
      "Accessories",
      "Android Tablets",
      "eReaders",
      "iPad",
      "Windows Tablets",
    ],
  },
  {
    name: "Cell Phones",
    icon: Phones,
    icon2: Arrow,
    list: [
      "Batteries, Power Banks & Chargers",
      "Cases & Covers",
      "Cell Phone Accessories",
      "Locked Cell Phones",
      "No Contract & Prepaid Cell Phones",
      "Unlocked Cell Phones",
    ],
  },
  {
    name: "Printer & Supplies",
    icon: Printer,
    icon2: Arrow,
    list: [
      "All Printers, Ink & Toner",
      "All-in-One Printers",
      "Business Printers",
      "Ink & Toner",
      "Photo Printers",
    ],
  },
  {
    name: "Headphones",
    icon: Headphone,
    icon2: Arrow,
    list: [
      "All Headphones",
      "AirPods",
      "Earbud & In-Ear Headphones",
      "Noise-Cancelling Headphones",
      "Over-Ear & On-Ear Headphones",
      "Premium Headphones",
      "True Wireless Headphones",
      "Wireless Headphones",
      "Work-From-Home Headphones",
    ],
  },
  {
    name: "Networking",
    icon: Networking,
    icon2: Arrow,
    list: [
      "All Wi-Fi & Networking",
      "Find Your Wi-Fi Solution",
      "Mesh Wi-Fi",
      "Modems",
      "Network Security & Firewall Devices",
      "Network Switches",
      "Routers",
      "Wi-Fi Extenders",
    ],
  },
  {
    name: "Wearable Technology",
    icon: Wearable,
    icon2: Arrow,
    list: [
      "All Wearable Technology",
      "Apple Watch",
      "Fitness Trackers",
      "Shop by Brand",
      "Smartwatches",
      "Virtual Reality",
    ],
  },
  {
    name: "Smart Home",
    icon: SmartHome,
    icon2: Arrow,
    list: [
      "Appliance Parts & Accessories",
      "Dishwashers",
      "Freezers & Ice Makers",
      "Irons, Streamers",
      "Kitchen Appliances",
      "Ovens & Ranges",
      "Refrigerators",
      "Vacuums & Floor Care",
      "Washer & Dryers",
    ],
  },
  {
    name: "Cameras",
    icon: Camera,
    icon2: Arrow,
    list: [
      "All Cameras, Camcorders & Drones",
      "Camcorders",
      "Camera Accessories",
      "Cameras & Lenses",
      "Content Creator Gear",
      "Drones",
      "Shop by Brand",
    ],
  },
];

export const heroCategories = [
  {
    name: "Laptops & Computers",
    icon: LaptopLight,
    list: [
      "Accessories",
      "Chromebook",
      "Components",
      "Desktops",
      "Laptops",
      "Monitors",
      "Networking",
      "PC Gaming",
      "Printers & Ink",
      "Software",
    ],
    img: LaptopSide,
    imgTitle: "All Systems Pro",
  },
  {
    name: "Tvs & Video",
    icon: TvLight,
    list: [
      "Home Theater Systems",
      "Sound Bars",
      "Streaming Devices",
      "TV Accessories",
      "TV Cables & Adapters",
      "TV Stands & Entertainment Centers",
      "TV Wall Mounts",
      "TVs",
    ],
    img: TvSide,
    imgTitle: "Save up to $1,000 on QLED 4K TVs",
  },
  {
    name: "Cell Phones",
    icon: CellPhonesLight,
    list: [
      "Batteries, Power Banks & Chargers",
      "Cases & Covers",
      "Cell Phone Accessories",
      "Locked Cell Phones",
      "No Contract & Prepaid Cell Phones",
      "Unlocked Cell Phones",
    ],
    img: PhoneSide,
    imgTitle: "Blast past fast.",
  },
  {
    name: "Wearable Tech",
    icon: WearableLight,
    list: [
      "All Wearable Technology",
      "Apple Watch",
      "Fitness Trackers",
      "Shop by Brand",
      "Smartwatches",
      "Virtual Reality",
    ],
    img: WearableSide,
    imgTitle: "Live the unbelievable",
  },
  {
    name: "Appliances",
    icon: AppliancesLight,
    list: [
      "Appliance Parts & Accessories",
      "Dishwashers",
      "Freezers & Ice Makers",
      "Irons, Streamers",
      "Kitchen Appliances",
      "Ovens & Ranges",
      "Refrigerators",
      "Vacuums & Floor Care",
      "Washer & Dryers",
    ],
    img: AppliancesSide,
    imgTitle: "Robot Vacuum 3 in 1 Robotic Cleaner",
  },
  {
    name: "Cameras",
    icon: CamerasLight,
    list: [
      "All Cameras, Camcorders & Drones",
      "Camcorders",
      "Camera Accessories",
      "Cameras & Lenses",
      "Content Creator Gear",
      "Drones",
      "Shop by Brand",
    ],
    img: CameraSide,
    imgTitle: "Make it iconic",
  },
  {
    name: "iPads & Tablets",
    icon: IpadsLight,
    list: [
      "Accessories",
      "Android Tablets",
      "eReaders",
      "iPad",
      "Windows Tablets",
    ],
    img: IpadSide,
    imgTitle: "Your next computer is not a computer",
  },
  {
    name: "Headphones",
    icon: HeadphonesLight,
    list: [
      "All Headphones",
      "AirPods",
      "Earbud & In-Ear Headphones",
      "Noise-Cancelling Headphones",
      "Over-Ear & On-Ear Headphones",
      "Premium Headphones",
      "True Wireless Headphones",
      "Wireless Headphones",
      "Work-From-Home Headphones",
    ],
    img: HeadphonesSide,
    imgTitle: "Everything you hear is unheard of.",
  },
  {
    name: "Networking",
    icon: NetworkingLight,
    list: [
      "All Wi-Fi & Networking",
      "Find Your Wi-Fi Solution",
      "Mesh Wi-Fi",
      "Modems",
      "Network Security & Firewall Devices",
      "Network Switches",
      "Routers",
      "Wi-Fi Extenders",
    ],
    img: NetworkSide,
    imgTitle: "The fastest eero yet",
  },
];

export const CategoriesData = [
  {
    name: "Cell Phones",
    img: PhoneImg,
  },
  {
    name: "Laptops",
    img: LaptopImg,
  },
  {
    name: "TVs & video",
    img: TvImg,
  },
  {
    name: "Tablets",
    img: IpadImg,
  },
  {
    name: "Smart Watch",
    img: SmartWatchImg,
  },
  {
    name: "Headphones",
    img: headphoneImg,
  },
];

export const DealsData = [
  {
    desc: "Students save up to $430 on select Surface devices",
    img: studentDeal,
  },
  {
    desc: "Now’s the time to pickup what you’ve been looking for.",
    img: LaborDeal,
  },
];

export const FooterData = [
  {
    title: "Get to Know Us",
    list: ["About Us", "News & Blog", "Careers", "Investors", "Contact Us"],
  },
  {
    title: "Customer Service",
    list: [
      "Help Center",
      "FAQ’s",
      "Accessibility",
      "Feedback",
      "Size Guide",
      "Payment Method",
    ],
  },
  {
    title: "Orders & Returns",
    list: [
      "Track Order",
      "Shipping & Delivery",
      "Return & Exchange",
      "Price Match guarantee",
    ],
  },
];

export const TodayBestDealsVertical = [
  {
    offer: "save up to 20%",
    name: "Asus VivoBook",
    desc: "Lighten everything",
    img: LapBanner,
  },
  {
    offer: "Deal of the Day",
    name: "Limited Quantities",
    desc: "Save up to 500$ on select big-screen TVs",
    img: TVBanner,
  },
];
export const TodayBestDealsHorizontal = [
  {
    offer: "introducing",
    name: "iRobot Select",
    desc: "Come home to clean",
    img: CleanBanner,
  },
  {
    offer: "new arrival",
    name: "Galaxy Tab S7+",
    desc: "Meet the Galaxy Tab",
    img: TabBanner,
  },
];
