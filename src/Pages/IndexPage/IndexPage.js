import React from 'react';
import '../../App.css';
import { NavBar } from '../../components/NavBar/NavBar';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import { ProjectList } from '../../components/ProjectList/ProjectList';
import { MainDisplay } from '../../components/MainDisplay/MainDisplay';
import { Footer } from '../../components/Footer/Footer';

const project1 = {
  imageSrc: './Images/Landpage/maroccanResidence.png',
  name: 'Maroccan Residence',
  condition: 'Completed in 2018',
  projectType: 'All Projects Latest Projects Residence',
  location: 'Paris, France',
  link: '/maroccanresidence.html',
  description: 'This is a house inspired by the influence of Yves Saint Laurent to the maroccan style of nomadic living.'
};
const project2 = {
  imageSrc: './Images/Landpage/dramatic.png',
  name: 'Dramatic Residence',
  condition: 'Case Study',
  projectType: 'show All Projects Featured Projects Latest Projects Residence',
  location: 'Warsaw, Poland',
  link: '/dramaticresidence.html',
  description:'This is a case study on blending dramatic with modern influences.'
};
const project3 = {
  imageSrc: './Images/Project Pages/Yacht/1.JPG',
  name: 'MY I-SEA Yacht',
  condition: 'Completed in 2009',
  projectType: 'show All Projects Featured Projects Yachts',
  location: 'Salamina, Greece',
  link: '/myiseayacht.html',
  description:'This project is an interior and exterior renovation of the yacht MY I-SEA that belongs to the royal family of the United Arab Emirates.'
};
const project4 = {
  imageSrc: './Images/Landpage/Mediterranean.png',
  name: 'Mediterranean Residence',
  condition: 'Completed in 2019',
  projectType: 'show All Projects Featured Projects Residence',
  location: 'Mani, Greece',
  link: '/mediterraneanresidence.html',
  description:'Residential design and construction in a provincial coastal area of Greece, Mani.'
};
const project5 = {
  imageSrc: './Images/Landpage/minimalResidence.png',
  name: 'Minimal Residence',
  condition: 'Completed in 2008',
  projectType: 'All Projects Featured Projects Residence',
  location: 'Chaidari, Greece',
  link: '/minimalresidence.html',
  description:'A pool mansion designed and built in the outskirts of Athens, Greece. The inspiration of this design was based on a combination of exposed materials and modernism.'
};
const project6 = {
  imageSrc: './Images/Landpage/appartment.png',
  name: 'Apartment Design',
  condition: 'Completed in 2015',
  projectType: 'All Projects Residence',
  location: 'Athens, Greece',
  link: '/Apartmentdesign.html',
  description:'Appartment renovation in a semi-classical character with some influences from colonial architecture.'
};
const project7 = {
  imageSrc: './Images/Landpage/WaterPark.png',
  name: 'Water park Cafe and Venue',
  condition: 'Completed in 2015',
  projectType: 'All Projects Cafe - Bars',
  location: 'Athens, Greece',
  link: '/waterparkcafe.html',
  description:'Design and construction project of a venue that is placed inside the largest water park in Greece.'
};
const project8 = {
  imageSrc: './Images/Project Pages/jewlleryShop/kourtis_1.jpg',
  name: 'Jewllery Shop',
  condition: 'Completed in 2012',
  projectType: 'All Projects Retail Stores',
  location: 'Athens, Greece',
  link: '/jewlleryshop.html',
  description:'A jewllery shop that required our expertise in safety design. Minimal and reflective surfaces combined with black and white color palette.'
};
const project9 = {
  imageSrc: './Images/Project Pages/barbershop/2.jpg',
  name: 'Barber Shop',
  condition: 'Completed in 2014',
  projectType: 'All Projects Retail Stores',
  location: 'Athens, Greece',
  link: '/barbershop.html',
  description:'A vintage space that has as its main goal to make the customers feel calm and refreshed. Walnut and burgundy leather helpd with the creation of the aforementioned feeling.'
};


const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
];

export class IndexPage extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainDisplay />
        <FilterBar />
        <ProjectList projects={projects} />
        <Footer />
      </div>
    )
  }
}
