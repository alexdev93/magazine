import React from 'react';
import Main from '../components/Main'
import Enterprenur from '../components/Enterprenur'
import AdPlaceholders from '../components/AdPlaceholders'
import TopProperties from '../components/TopProperties'
import Feature from '../components/Feature'
import MainArticleAndProjects from '../components/MainArticleAndProjects'
import Form from '../components/Form'

export const Home = () => {

  return (
    <>
      <Main />
      <AdPlaceholders />
      <Enterprenur />
      <TopProperties/>
      <Feature/>
      <MainArticleAndProjects/>
      <Form/>
    </>
  );
};
