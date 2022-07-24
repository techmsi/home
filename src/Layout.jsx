import { categories, skills } from './skills.json';
import { links, iconOnlyLinks } from './links.json';
import { useEffect, useState } from 'react';

export const Footer = () => (
  <footer data-area="footer">
    <a
      href="https://github.com/techmsi"
      rel="author"
      aria-label="View Author's Github"
    >
      Sophie Idromenos.
    </a>
    <span> Copyright © {new Date().getFullYear()}. All Rights Reserved.</span>
  </footer>
);
export const Skill = ({ skill }) => {
  const { header, list } = skill;

  return (
    <div className="skill-card">
      <h3 className="header">{header}</h3>
      {list.map((item) => (
        <span key={item} className={item}></span>
      ))}
    </div>
  );
};
export const Header = () => (
  <header data-area="header">
    <h1 className="visuallyHidden">Sophie's Portfolio</h1>
    <div className="logo"></div>
  </header>
);
export const Menu = () => (
  <nav aria-label="Sites & Blogs Menu" data-area="menu">
    {links.map(({ link, label }) => (
      <a className="text" key={link} href={link}>
        <span>{label}</span>
      </a>
    ))}
    <div className="links">
      {iconOnlyLinks.map(({ link, label, icon = null }) => (
        <a key={link} className="link" href={link} aria-label={label}>
          <i className={icon}></i>
        </a>
      ))}
    </div>
  </nav>
);
export const Tag = ({ name, setCategory }) => {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn(!on);
  };

  useEffect(() => {
    setCategory({ name, on });
  }, [on]);
  return (
    <button
      key={name}
      className={on ? 'slanted-button tag on' : 'slanted-button tag '}
      onClick={toggle}
    >
      {name}
    </button>
  );
};

export const Tags = ({ setFiltered }) => {
  const setCategory = ({ name, on }) => {
    const category = (selectedCategories) =>
      selectedCategories.map((item) =>
        item.name === name ? { ...item, on } : item
      );

    setFiltered(category);
  };

  return (
    <div className="tags" data-area="tags">
      {categories.map(({ name }) => (
        <Tag key={name} name={name} setCategory={setCategory} />
      ))}
    </div>
  );
};
