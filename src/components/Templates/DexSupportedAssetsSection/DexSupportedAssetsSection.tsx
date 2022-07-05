import Caption from '../../Atoms/Caption';
import { DEX_TRADE_ASSETS } from './content';
import Picture from '../../Atoms/Picture';
import Skeleton from '../../Atoms/Skeleton';
import { mergeClassNames } from '../../../helpers/styles';

const DexSupportedAssetsSection = () => {
  return (
    <div className="dex-section lg:my-20">
      <div className="mx-auto max-w-7xl px-10 pt-6 text-center lg:pt-0">
        <Caption hashLabel={'assets'} title={'Supported coins'} />
        <div
          className={mergeClassNames(
            'grid gap-8 md:mt-12',
            `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${DEX_TRADE_ASSETS.length}`
          )}
        >
          {DEX_TRADE_ASSETS.map((token) => (
            <div key={token.name} className="pt-6">
              <div className="border-3 flow-root rounded-lg border-brand-medium-blue bg-brand-blue px-6 pb-8 shadow-lg">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center rounded-md border border-brand-medium-blue bg-brand-blue p-3 shadow-lg">
                      <Picture
                        srcSets={token.srcSets}
                        fallBackSrc={token.fallBackSrc}
                        alt={token.alt}
                        isLazy={true}
                        classes={mergeClassNames(
                          token.isComingSoon ? ' brightness-50' : '',
                          'w-10 h-10 lg:h-10 lg:w-10 mx-auto'
                        )}
                        placeholder={<Skeleton.Circle size={'16'} />}
                      />
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-normal tracking-tight text-white">
                    {token.name}
                  </h3>
                  {token.isComingSoon && (
                    <p className="mt-4 text-xs uppercase text-brand-greyed">
                      Coming soon
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DexSupportedAssetsSection;
