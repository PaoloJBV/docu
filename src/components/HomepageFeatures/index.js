import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Dinocamp',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Esta especie de dinosaurios solo se encuentran en <code>Comas</code> ya que la tierra es su unico metodo de diversión
      </>
    ),
  },
  {
    title: 'DinoSenati',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Esta especie <code>Deberian</code> haberse extinto, por que, los humanos empezaron a <code>Quemar</code> su habitad, este seria <code>SENATI</code>
      </>
    ),
  },
  {
    title: 'DinoDigitalBuho',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Esta especie se caracteriza por hacer ejercicios cargando paginas en WordPress, si un ser ingresa a su habitad, este empieza a recitar codigos de Java 😴
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
        <Heading as="h3">{title}</Heading>
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
