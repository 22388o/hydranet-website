import type { NextPage } from 'next';

import {
  getStoryblokApi,
  StoryblokComponent,
  useStoryblokState,
} from '@storyblok/react';

const Slug: NextPage = ({ story }: any) => {
  story = useStoryblokState(story);
  return <StoryblokComponent blok={story.content} />;
};

export async function getStaticPaths({ locales }) {
  const { data } = await getStoryblokApi().get('cdn/links/');
  const paths: any = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder) {
      return;
    }

    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug;
    if (slug.indexOf('/') !== -1) {
      splittedSlug = slug.split('/');
    }
    if (slug === 'home') splittedSlug = false;
    // create additional languages
    for (const locale of locales) {
      paths.push({ params: { slug: splittedSlug }, locale });
    }
  });

  return {
    paths: paths,
    fallback: false,
  };
}

type GetStaticProps = {
  params: any;
  locale: string;
  locales: Array<string>;
  defaultLocale: string;
};
export async function getStaticProps({
  params,
  locale,
  locales,
  defaultLocale,
}: GetStaticProps) {
  console.log('PARAMS getStaticProps', params);
  // the slug of the story
  // const slug = 'dex';
  // const slug = params.slug ? params.slug.join('/') : 'home';
  const slug = params.slug;
  const sbParams = {
    version: 'draft',
    resolve_relations: ['featured-posts.posts', 'selected-posts.posts'],
    language: locale,
  };

  console.log('SLUG static props');
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
      locale,
      locales,
      defaultLocale,
    },
  };
}

export default Slug;
