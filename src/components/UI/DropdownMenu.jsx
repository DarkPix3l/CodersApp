import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function DropdownMenu() {
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-700 data-open:bg-gray-700">
        My account
      </MenuButton>
      <MenuItems
        className="w-32 left-auto top-[75px] right-[33px] origin-top-right rounded-xl border border-white/55 bg-black/55 p-2 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
        anchor="bottom"
      >
        <MenuItem className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
          <a className="block data-focus:bg-blue-100" href="/profile">
            Profile
          </a>
        </MenuItem>
        <MenuItem className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
          <a className="block data-focus:bg-blue-100" href="/profile">
            Logout
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
