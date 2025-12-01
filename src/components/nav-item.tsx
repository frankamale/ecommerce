import { Link } from "react-router-dom";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import type { Category } from "@/data/products";

export const NavItem = ({ items }: { items: Category[] }) => {
  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <div key={item.id} className="group relative">
          <div className="group-hover:bg-blue-500 cursor-pointer flex items-center gap-1 p-2">
            {item.name} {item.subCategories && <FaCaretDown />}
          </div>
          {item.subCategories && (
            <div className="absolute hidden group-hover:block bg-white left-0 top-full min-w-full w-fit">
              <ul>
                {item.subCategories.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/categories/${item.slug}`}
                    className="block text-sm text-black border-b border-b-1 last:border-b-0 hover:bg-blue-500 hover:text-white"
                  >
                    <li className=" py-1 px-2 text-nowrap">{item.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const AllCategories = ({ items }: { items: Category[] }) => {
  return (
    <div className="relative group/outer">
      <Link
        to={"/products"}
        className="group-hover/outer:bg-blue-500 p-2 group-hover/outer:text-white flex items-center gap-1"
      >
        All Products <FaCaretDown />
      </Link>
      <div className="absolute hidden group-hover/outer:flex left-0 top-full flex-col bg-white">
        {items.map((item) => (
          <div
            key={item.id}
            className="group/inner relative last:border-b-0 border-b border-b-1"
          >
            <Link
              to={"/"}
              className="group-hover/inner:bg-blue-500 text-black text-nowrap group-hover/inner:text-white cursor-pointer flex items-center justify-between gap-1 p-2"
            >
              {item.name} {item.subCategories && <FaCaretRight />}
            </Link>
            {item.subCategories && (
              <div className="absolute shadow-[-2px_0px_12px_-4px_rgba(0,0,0,0.15)] hidden bg-white group-hover/inner:block left-full top-0 min-w-full w-fit">
                <ul>
                  {item.subCategories.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/categories/${item.slug}`}
                      className="block text-sm text-black border-b border-b-1 last:border-b-0 px-2 py-2.5  hover:bg-blue-500 hover:text-white"
                    >
                      <li className="text-nowrap">{item.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
