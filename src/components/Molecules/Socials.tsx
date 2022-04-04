import { ISocial } from '../../interfaces';
import { mergeClassNames } from '../../helpers/styles';

const socials: Array<ISocial> = [
  {
    name: 'Discord',
    url: 'https://discord.gg/vkpzTucY',
    icon: 'fa-brands fa-discord',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/stakenetofficial',
    icon: 'fa-brands fa-telegram',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/XSNofficial',
    icon: 'fa-brands fa-twitter',
  },
  {
    name: 'Reddit',
    url: 'https://medium.com/stakenet',
    icon: 'fa-brands fa-reddit',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/stakenetofficial',
    icon: 'fa-brands fa-instagram',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/StakenetOfficial',
    icon: 'fa-brands fa-facebook',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/stakenet',
    icon: 'fa-brands fa-medium',
  },
  {
    name: 'Github',
    url: 'https://github.com/hydra-net',
    icon: 'fa-brands fa-github',
  },
];

const Socials = () => {
  return (
    <div
      className={
        'grid w-full max-w-xs grid-cols-4 gap-x-1 gap-y-4 text-center lg:ml-auto xl:max-w-lg xl:grid-cols-8'
      }
    >
      {socials.map((social) => (
        <a
          key={social.url}
          href={social.url}
          target={'_blank'}
          className={
            'rounded-md focus:outline-none focus:ring focus:ring-brand-light-blue'
          }
          aria-label={social.name}
          rel="noreferrer"
        >
          <i
            className={mergeClassNames(
              'text-2xl text-white transition-colors duration-200 hover:text-brand-light-blue xl:text-3xl',
              social.icon
            )}
          />
        </a>
      ))}
    </div>
  );
};
export default Socials;