const rules = {
  'Breaking traffic signal': {
    trafficRuleViolated: 'Breaking traffic Rule',
    fineCharged: '1,000/-',
    anyotheractions: 'Licence Scrapping For Three Months',
  },
  'Drunk and Drive': {
    trafficRuleViolated: 'Drunk and Drive',
    fineCharged: '10,000/-',
    anyotheractions: '--',
  },
  'Over speeding': {
    trafficRuleViolated: 'Over speeding',
    fineCharged: '1,000/- to 2,000/-',
    anyotheractions: '--',
  },
  'Driving without licence': {
    trafficRuleViolated: 'Driving without licence',
    fineCharged: '5,000/-',
    anyotheractions: '--',
  },
  'Driving without Insurance': {
    trafficRuleViolated: 'Driving without Insurance',
    fineCharged: '2,000/-',
    anyotheractions: 'Imprisonment of up to 3 months',
  },
  'Riding without Helmet': {
    trafficRuleViolated: 'Riding without Helmet',
    fineCharged: '1,000/-',
    anyotheractions: 'Licence Scrapping/disqualification For Three Months',
  },
  'Riding without permit': {
    trafficRuleViolated: 'Riding without permit',
    fineCharged: '10,000/-',
    anyotheractions: '--',
  },
  'Juvenile driving': {
    trafficRuleViolated: 'Juvenile driving',
    fineCharged: '25,000/-',
    anyotheractions: 'Three years of of imprisonment of Guardian or owner.',
  },
  'Not carrying the required documents': {
    trafficRuleViolated: 'Not carrying the required documents',
    fineCharged: '25,000/-',
    anyotheractions: '--',
  },
  'Driving without a valid auto insurance': {
    trafficRuleViolated: 'Driving without a valid auto insurance',
    fineCharged: '2,000/-',
    anyotheractions: '--',
  },
  'Driving after being disqualified': {
    trafficRuleViolated: 'Driving after being disqualified',
    fineCharged: '10,000/-',
    anyotheractions: '--',
  },
  'Violating licensing conditions': {
    trafficRuleViolated: 'Violating licensing conditions',
    fineCharged: '25,000/- to ,1,00,000/-',
    anyotheractions: '--',
  },
  'Driving without valid vehicle fitness certificate': {
    trafficRuleViolated: 'Driving without valid vehicle fitness certificate',
    fineCharged: 'Up to 5,000 not less than 2,000/-',
    anyotheractions: '--',
  },
  'Vehicle without RC book (Registration Certificate)': {
    trafficRuleViolated: 'Vehicle without RC Book (Registration Certificate)',
    fineCharged: '2,000/-',
    anyotheractions: '--',
  },
  'Travelling without ticket': {
    trafficRuleViolated: 'Travelling without ticket',
    fineCharged: '500/-',
    anyotheractions: '--',
  },
  'Violation of rules of road regulation': {
    trafficRuleViolated: 'Violation of rules of road regulation',
    fineCharged: '500/-',
    anyotheractions: '--',
  },
  'Driving by a minor (aged below 18)': {
    trafficRuleViolated: 'Driving by a minor (aged below 18)',
    fineCharged: '500/-',
    anyotheractions: '--',
  },
  'Offences made by jeveniles (aged below 18)': {
    trafficRuleViolated: 'Offences made by jeveniles (aged below 18)',
    fineCharged: '25,000/-',
    anyotheractions:
      '3 years of imprisonment to eb faced by the guardian of the individual or owner of the vehicle',
  },
  'Not obeying the orders of authorities': {
    trafficRuleViolated: 'Not obeying the orders of authorities',
    fineCharged: '2,000/-',
    anyotheractions: '--',
  },
  'Oversize vehicles': {
    trafficRuleViolated: 'Oversize vehicles',
    fineCharged: '5,000/-',
    anyotheractions: '--',
  },
  'Driving without wearing seat belts': {
    trafficRuleViolated: 'Driving without wearing seat belts',
    fineCharged: '1,000/-',
    anyotheractions: '--',
  },
  'Rough/Reckless/Negligent Driving': {
    trafficRuleViolated: 'Rough/Reckless/Negligent Driving',
    fineCharged: '1,000/-',
    anyotheractions: '--',
  },
  'Not making way for emergency vehicles': {
    trafficRuleViolated: 'Not making way for emergency vehicles',
    fineCharged: '10,000/-',
    anyotheractions: '--',
  },
  'Driving in center': {
    trafficRuleViolated: 'Driving in center',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Driving against one way': {
    trafficRuleViolated: 'Driving against one way',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Taking U turn in forbidden hours': {
    trafficRuleViolated: 'Taking U turn in forbidden hours',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Tripling on two wheelers': {
    trafficRuleViolated: 'Tripling on two wheelers',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Driving on footpath': {
    trafficRuleViolated: 'Driving on footpath',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Use of offensive number plate': {
    trafficRuleViolated: 'Use of offensive Number Plate',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Driving without horn': {
    trafficRuleViolated: 'Driving without horn',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Disobeying a traffic police officer in uniform': {
    trafficRuleViolated: 'Disobeying a traffic police officer in uniform',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Using mobile phone while driving': {
    trafficRuleViolated: 'Using mobile phone while driving',
    fineCharged: '1,000/-',
    anyotheractions: '--',
  },
  'Vehicle without side mirror': {
    trafficRuleViolated: 'Vehicle without side mirror',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Loading goods on vehicle more than permitted weight': {
    trafficRuleViolated: 'Loading goods on vehicle more than permitted weight',
    fineCharged: '2,000/-',
    anyotheractions: 'extra 1,000/- for every other ton',
  },
  'Driving without khaki uniform': {
    trafficRuleViolated: 'Driving without khaki uniform',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Driving without a badge': {
    trafficRuleViolated: 'Driving without a badge',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Conductor without specified uniform': {
    trafficRuleViolated: 'Conductor without specified uniform',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Conductor without a badge': {
    trafficRuleViolated: 'Conductor without a badge',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Parking in the same direction of flow of traffic': {
    trafficRuleViolated: 'Parking in the same direction of flow of traffic',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Parking against flow of traffic': {
    trafficRuleViolated: 'Parking against flow of traffic',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Parking on taxi stand': {
    trafficRuleViolated: 'Parking on taxi stand',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Parking on Bridge': {
    trafficRuleViolated: 'Parking on Bridge',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Parking in corner/Edge': {
    trafficRuleViolated: 'Parking in corner/Edge',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Parking in No Parking Zone': {
    trafficRuleViolated: 'Parking in No Parking Zone',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
  'Parking in front of gate': {
    trafficRuleViolated: 'Parking in front of gate',
    fineCharged: '100/-',
    anyotheractions: '--',
  },
};
export default rules;
