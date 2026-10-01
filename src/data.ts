export const company = {name:'Venticlima', city:'Agadir', region:'Souss-Massa', phone:'+212661255939', phoneLabel:'+212 661 255 939', email:null, whatsapp:'212661255939'};
export const wa = (text = 'Bonjour Venticlima, je souhaite échanger concernant un projet professionnel.') => 'https://wa.me/'+company.whatsapp+'?text='+encodeURIComponent(text);
export const services = [
{id:'climatisation', title:'Climatisation professionnelle', short:'Le confort, à la bonne échelle.', text:'Des solutions de confort thermique pensées pour les usages, les volumes et les contraintes de vos espaces professionnels.', applications:'Hôtels, bureaux, commerces et espaces recevant du public.', systems:'Équipements de climatisation et distribution de l’air, sélectionnés après étude des locaux.', image:'rooftop.jpg'},
{id:'ventilation', title:'Ventilation & traitement de l’air', short:'Un air qui circule. Un espace qui respire.', text:'Renouveler, extraire et distribuer l’air pour accompagner l’activité quotidienne de votre bâtiment.', applications:'Locaux tertiaires, restauration, ateliers et bâtiments techniques.', systems:'Réseaux de gaines, extraction et traitement de l’air adaptés aux besoins du site.', image:'ventilation.jpg'},
{id:'froid', title:'Froid professionnel', short:'La température au service de votre activité.', text:'Des solutions frigorifiques adaptées aux conditions de conservation et aux contraintes d’exploitation de votre activité.', applications:'Restauration, agroalimentaire et espaces de stockage professionnel.', systems:'Équipements de production et de conservation frigorifique définis selon le besoin.', image:'roof.jpg'},
{id:'installation', title:'Installation & mise en service', short:'Du choix technique à la mise en service.', text:'Une mise en œuvre organisée, qui tient compte du bâtiment, de ses accès et de la coordination du chantier.', applications:'Construction, rénovation et remplacement d’équipements.', systems:'Pose, raccordement, vérifications et prise en main des installations.', image:'rooftop.jpg'},
{id:'maintenance', title:'Maintenance', short:'Préserver la performance dans le temps.', text:'Entretien, contrôles et suivi pour anticiper les dysfonctionnements et préserver le fonctionnement de vos équipements.', applications:'Installations climatiques et frigorifiques en exploitation.', systems:'Maintenance préventive, corrective et contrôle des performances.', image:'roof.jpg'},
{id:'depannage', title:'Dépannage & SAV', short:'Comprendre la panne. Rétablir le fonctionnement.', text:'Un diagnostic des installations existantes et une intervention adaptée à l’origine du dysfonctionnement.', applications:'Professionnels, exploitants et responsables techniques.', systems:'Diagnostic, réparation et assistance technique, selon les équipements.', image:'ventilation.jpg'},
];
export const sectors = [
{title:'Hôtellerie',text:'Confort des chambres, qualité de l’air et contraintes d’exploitation.',image:'hotel-marrakech.jpg'},
{title:'Restauration',text:'Extraction, ventilation et conservation des produits.',image:'ventilation.jpg'},
{title:'Tertiaire',text:'Des espaces de travail et de vente au confort maîtrisé.',image:'office.jpg'},
{title:'Industrie',text:'Des installations pensées pour les contraintes du site.',image:'roof.jpg'},
{title:'Agroalimentaire',text:'Froid professionnel et maîtrise des environnements techniques.',image:'rooftop.jpg'},
{title:'Immobilier',text:'Intégrer les installations climatiques dès la conception.',image:'office.jpg'}
];
export const steps = [
['Étude','Comprendre vos usages, visiter le site et identifier ses contraintes.'],
['Dimensionnement','Définir la solution technique et les équipements adaptés.'],
['Installation','Organiser le chantier et mettre en œuvre les installations.'],
['Mise en service','Contrôler le fonctionnement et accompagner la prise en main.'],
['Maintenance','Entretenir les équipements et suivre leur fonctionnement.']
];
export const projects = [
{id:'hotel',title:'Confort climatique hôtelier',sector:'Hôtellerie',category:'Climatisation',image:'hotel-marrakech.jpg',need:'Maintenir le confort dans des espaces aux usages et occupations variables.',solution:'Étude des besoins, choix des équipements et organisation de leur mise en œuvre.'},
{id:'tertiaire',title:'Renouvellement d’air tertiaire',sector:'Tertiaire',category:'Ventilation',image:'office.jpg',need:'Accompagner les usages quotidiens d’un bâtiment professionnel.',solution:'Analyse des flux, conception de la ventilation et contrôle à la mise en service.'},
{id:'industrie',title:'Installation technique industrielle',sector:'Industrie',category:'Froid',image:'roof.jpg',need:'Adapter les installations aux contraintes de production et d’exploitation.',solution:'Définition des conditions de fonctionnement et suivi technique de l’installation.'}
];
// Unverified business figures stay unpublished until validated by the client.
export const pendingFacts = {years:null,projectCount:null,clients:null,interventions:null,partners:[],certifications:[]};
