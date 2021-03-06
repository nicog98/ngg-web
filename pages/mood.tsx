import React from 'react';
import { GetServerSideProps } from 'next';
import { Layout, getLayoutArgs, MoodBoard } from '@templates';
import { MoodImage } from 'model';
import { getMoodImages } from '../api/index';

export const getServerSideProps: GetServerSideProps = async () => {
  const moodImages = await getMoodImages();
  return {
    props: {
      moodImages,
    },
  };
};

interface IMood {
  moodImages: MoodImage[];
}

const Home = ({ moodImages }: IMood) => (
  <Layout {...getLayoutArgs()}>
    <MoodBoard
      images={moodImages}
    />
  </Layout>
);

export default Home;
