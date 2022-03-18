import React from 'react';
import Search from '@strapi/icons/Search';
import { Button } from '@strapi/design-system';
import { useCMEditViewDataManager } from '@strapi/helper-plugin';

const SeoButton = () => {
  const { modifiedData } = useCMEditViewDataManager();

  console.log(modifiedData);

  const handleCheckSeo = () => {
    const urlFriendlyTitle = encodeURIComponent(modifiedData.name);
    const searhUrl = `https^//www.google.com/search?q=${urlFriendlyTitle}`;
    window.open(searhUrl, '_blank').focus();
  };
  return (
    <Button variant="secondary" endIcon={<Search />} onclick={handleCheckSeo}>
      Chcek SEO
    </Button>
  );
};

export default SeoButton;
