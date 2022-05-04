import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import "./App.css";
const navigation = [
  { name: "My Homepage", href: "/", current: true },
  // { name: "Team", href: "/", current: false },
  // { name: "Projects", href: "/", current: false },
  // { name: "Calendar", href: "/", current: false },
];
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/photo%20(5).jpg?alt=media&token=5fa522af-bdb7-483b-90c5-99d58457d9b7",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // {
  //   id: 21,
  //   name: "Basic Tee",
  //   href: "/",
  //   imageSrc:
  //     "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/neeeewww.jpg?alt=media&token=ff3f72d0-a5f1-498b-9551-4a6ebe2877ea",
  //   imageAlt: "Front of men's Basic Tee in black.",
  // },
  {
    id: 2,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/photo%20(4).jpg?alt=media&token=6ad3e468-4d20-40a1-82ae-30e08884f36c",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/picture%20(1).jpg?alt=media&token=3f31dd5b-7dd0-4347-bd48-00ed920169e0",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/IMG_20211206_203453.jpg?alt=media&token=522ccf59-248f-444c-82a0-f8a96a5d1adc",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/IMG_20211206_201827.jpg?alt=media&token=2c54e3f1-21b4-4acf-9cc9-1703bc47a012",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 6,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/IMG_20210703_215228.jpg?alt=media&token=7ec57d35-cb8e-4dc6-b542-791563e367f7",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 7,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/IMG_20200627_175328.jpg?alt=media&token=6e46667e-bd05-4e9d-be17-ed7670126b8a",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 8,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/IMG20210716154455.jpg?alt=media&token=c7e08509-2cea-4249-85e8-38bc52e338c8",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 9,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/IMG20210617201510.jpg?alt=media&token=f77072e7-71e8-44ec-a80a-0ea7f884bb19",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 10,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/photo%20(1).jpg?alt=media&token=d2847358-9670-4a96-a5a8-76180514632c",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 11,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/photo%20(3).jpg?alt=media&token=a02a0229-7345-48ce-af85-9f9c6ef440d6",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 12,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/photo%20(2).jpg?alt=media&token=3a10bc2a-232a-4ab9-b6c9-0602c826c52d",
    imageAlt: "Front of men's Basic Tee in black.",
  },

  {
    id: 13,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/photo%20(6).jpg?alt=media&token=a908377f-031b-4431-b34f-38f0b35ba56d",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 14,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/photo%20(7).jpg?alt=media&token=32ed25c1-8e52-421b-88d1-8785108c8269",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 15,
    name: "Basic Tee",
    href: "/",
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/mukul-6599e.appspot.com/o/picture%20(3).jpg?alt=media&token=bf793043-fc9d-41ff-9d17-d987696502b5",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div>
      {" "}
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only ">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="./photo__5__RuR_icon.ico"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                       
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-10 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold text-center tracking-tight text-gray-900">
            Welcome to Mukul Rai's Gallery
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <a href={product.href}>
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
