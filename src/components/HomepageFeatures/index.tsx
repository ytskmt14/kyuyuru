import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "自分の気づきの共有",
    Svg: require("@site/static/img/light.svg").default,
    description: (
      <>
        少しでも気づきや発見のあった内容をアウトプットすることで
        同じようなところでつまづいている人、未来の自分の助けになることを目指す。
      </>
    ),
  },
  {
    title: "知見の蓄積",
    Svg: require("@site/static/img/database.svg").default,
    description: <>まずは、点を増やす。そこから線を繋げていくことを目指す。</>,
  },
  {
    title: "繋がるきっかけ作り",
    Svg: require("@site/static/img/handshake.svg").default,
    description: <>興味のあるものを共有することで、共通の興味を持つ人とのつながりを生み出すことを目指す。</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): JSX.Element {
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
