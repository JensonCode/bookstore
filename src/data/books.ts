type Book = {
  name: string;
  price: number;
  category: string;
  description: string;
};

const getRandomPrice = (): number => {
  const randomMax = 4;
  const multiplier = 100;

  const result = Math.random() * randomMax * multiplier;
  result.toFixed(2);

  return Number(result.toFixed(2));
};

const getCategory = (index: number): string => {
  const categoryList = [
    'Science fiction',
    'Horror',
    'Romance',
    'History',
    'Thriller',
  ];

  return categoryList[index % 5];
};

const getDescription = (index: number): string => {
  const descriptionList = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    'Duo Reges: constructio interrete. Memini vero, inquam; Nunc ita separantur, ut disiuncta sint, quo nihil potest esse perversius. Atque ab isto capite fluere necesse est omnem rationem bonorum et malorum. Sequitur disserendi ratio cognitioque naturae; An eum discere ea mavis, quae cum plane perdidiceriti nihil sciat? Ac tamen hic mallet non dolere. Cur id non ita fit?',
    'Expressa vero in iis aetatibus, quae iam confirmatae sunt. Tu enim ista lenius, hic Stoicorum more nos vexat. Simus igitur contenti his. Ut aliquid scire se gaudeant? Quo tandem modo? Paupertas si malum est, mendicus beatus esse nemo potest, quamvis sit sapiens. Non est igitur voluptas bonum. Quid ad utilitatem tantae pecuniae? Hoc positum in Phaedro a Platone probavit Epicurus sensitque in omni disputatione id fieri oportere.',
    'Nullus est igitur cuiusquam dies natalis. Tenent mordicus.',
    'Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Quicquid porro animo cernimus, id omne oritur a sensibus; An vero, inquit, quisquam potest probare, quod perceptfum, quod. Ita relinquet duas, de quibus etiam atque etiam consideret. Recte, inquit, intellegis. Ut in geometria, prima si dederis, danda sunt omnia.',
    'Illi enim inter se dissentiunt. Si longus, levis. Si quicquam extra virtutem habeatur in bonis. Aliis esse maiora, illud dubium, ad id, quod summum bonum dicitis, ecquaenam possit fieri accessio. Quid enim de amicitia statueris utilitatis causa expetenda vides. Unum nescio, quo modo possit, si luxuriosus sit, finitas cupiditates habere. Respondeat totidem verbis. Haec para/doca illi, nos admirabilia dicamus.',
    'At coluit ipse amicitias. Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Quis enim potest ea, quae probabilia videantur ei, non probare? Est igitur officium eius generis, quod nec in bonis ponatur nec in contrariis. Nondum autem explanatum satis, erat, quid maxime natura vellet. Sumenda potius quam expetenda. Id enim natura desiderat.',
    'Bork Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis. Quod cum ille dixisset et satis disputatum videretur, in oppidum ad Pomponium perreximus omnes. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Istam voluptatem, inquit, Epicurus ignorat? Audio equidem philosophi vocem, Epicure, sed quid tibi dicendum sit oblitus es. Ut aliquid scire se gaudeant? Vestri haec verecundius, illi fortasse constantius.',
    'Quamquam tu hanc copiosiorem etiam soles dicere. Quamvis enim depravatae non sint, pravae tamen esse possunt. Aufert enim sensus actionemque tollit omnem. Est enim effectrix multarum et magnarum voluptatum. Videsne, ut haec concinant? Quid de Pythagora?',
    'Hunc vos beatum; Quae contraria sunt his, malane? Quid enim necesse est, tamquam meretricem in matronarum coetum, sic voluptatem in virtutum concilium adducere? Aperiendum est igitur, quid sit voluptas; Iam contemni non poteris. Sed ad illum redeo. Virtutibus igitur rectissime mihi videris et ad consuetudinem nostrae orationis vitia posuisse contraria. Cur deinde Metrodori liberos commendas?',
  ];

  return descriptionList[index / 3 - 1];
};

export const initBookList = (): Book[] => {
  const capacity = 30;

  const list: Book[] = [];

  for (let i = 0; i < capacity; i++) {
    list.push({
      name: `The Book ${i}`,
      price: getRandomPrice(),
      category: getCategory(i),
      description: getDescription(i),
    });
  }

  return list;
};
