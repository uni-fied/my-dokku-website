import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Research & Development',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Arsip dari hasil Riset & Development Kami bahas pada bagian Section ini,
        Kami bahas dengan sedemikian rupa agar lebih mudah difahami.
      </>
    ),
  },
  {
    title: 'Integration Tech.',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Merupakan buah hasil riset yang diintegrasikan ke dunia nyata seperti aplikasi yang dapat
        mempermudah dalam pekerjaan atau yang lainnya.
      </>
    ),
  },
  {
    title: 'Results Oriented',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Kami juga menulis kode dari buah pemikiran nyata yang diintegrasikan dalam pekerjaan
        yang kami tuangkan kedalam bentuk portofolio.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
