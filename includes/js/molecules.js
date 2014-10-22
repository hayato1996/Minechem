var molecules =
[
["C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>","cellulose","Cellulose"],
["H<sub>2</sub>O","water","Water"],
["CO<sub>2</sub>","carbonDioxide","Carbon Dioxide"],
["NO<sub>2</sub>","nitrogenDioxide","Nitrogen Dioxide"],
["C<sub>7</sub>H<sub>8</sub>","toluene","Toluene"],
["KNO<sub>3</sub>","potassiumNitrate","Potassium Nitrate"],
["C<sub>6</sub>H<sub>2</sub>(NO<sub>2</sub>)<sub>3</sub>C<sub>7</sub>H<sub>8</sub>","tnt","Trinitrotoluene"],
["SiO<sub>2</sub>","siliconDioxide","Silicon Dioxide"],
["CaCrSi<sub>2</sub>O<sub>6</sub>","calcicPyroxene","Calcicpyroxene"],
["FeS<sub>2</sub>","pyrite","Pyrite"],
["AlSiO<sub>4</sub>","nepheline","Nepheline"],
["SO<sub>4</sub>","sulfate","Sulfate (ion)"],
["Na<sub>8</sub>(AlSiO<sub>4</sub>)<sub>6</sub>SO<sub>4</sub>","noselite","Noselite"],
["Na<sub>8</sub>(AlSiO<sub>4</sub>)<sub>6</sub>Cl<sub>2</sub>","sodalite","Sodalite"],
["NO<sub>3</sub>","nitrate","Nitrate (ion)"],
["CO<sub>3</sub>","carbonate","Carbonate (ion)"],
["KCN","cyanide","Potassium Cyanide"],
["PO<sub>4</sub>","phosphate","Phosphate (ion)"],
["C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>","acetate","Acetate (ion)"],
["CrO<sub>4</sub>","chromate","Chromate (ion)"],
["OH","hydroxide","Hydroxide (ion)"],
["NH<sub>4</sub>","ammonium","Ammonium (ion)"],
["H<sub>3</sub>O","hydronium","Hydronium (ion)"],
["O<sub>2</sub>","peroxide","Peroxide (ion)"],
["CaO","calciumOxide","Calcium Oxide"],
["CaCO<sub>3</sub>","calciumCarbonate","Calcium Carbonate"],
["MgCO<sub>3</sub>","magnesiumCarbonate","Magnesium Carbonate"],
["Na<sub>8</sub>AlSiO<sub>4</sub>SO<sub>4</sub>","lazurite","Lazurite"],
["C<sub>5</sub>H<sub>8</sub>","isoprene","Isoprene"],
["C<sub>4</sub>H<sub>8</sub>","butene","Butene"],
["(C<sub>4</sub>H<sub>8</sub>)<sub>16</sub>C<sub>5</sub>H<sub>8</sub>","polyisobutylene","Polyisobutylene Rubber"],
["C<sub>4</sub>H<sub>6</sub>O<sub>5</sub>","malicAcid","Malic Acid"],
["C<sub>2</sub>H<sub>3</sub>Cl","vinylChloride","Vinyl Chloride Monomer"],
["(C<sub>2</sub>H<sub>3</sub>Cl)<sub>64</sub>","polyvinylChloride","Polyvinyl Chloride"],
["C<sub>10</sub>H<sub>15</sub>N","methamphetamine","Methamphetamine"],
["C<sub>12</sub>H<sub>17</sub>N<sub>2</sub>O<sub>4</sub>P","psilocybin","Psilocybin"],
["Fe<sub>2</sub>O<sub>3</sub>","iron<sub>3</sub>oxide","Iron (iii) Oxide"],
["Sr(NO<sub>3</sub>)<sub>2</sub>","strontiumNitrate","Strontium Nitrate"],
["Fe<sub>3</sub>O<sub>4</sub>","magnetite","Magnetite"],
["MgO","magnesiumOxide","Magnesium Oxide"],
["C<sub>30</sub>H<sub>42</sub>O<sub>7</sub>","cucurbitacin","Cucurbitacin"],
["C<sub>4</sub>H<sub>7</sub>NO<sub>4</sub>","asparticAcid","Aspartic Acid"],
["Ca<sub>5</sub>(PO<sub>4</sub>)<sub>3</sub>OH","hydroxylapatite","Hydroxylapatite"],
["C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub>","alinine","Alanine"],
["C<sub>2</sub>H<sub>5</sub>NO<sub>2</sub>","glycine","Glycine"],
["C<sub>3</sub>H<sub>7</sub>NO<sub>3</sub>","serine","Serine"],
["C<sub>11</sub>H<sub>17</sub>NO<sub>3</sub>","mescaline","Mescaline"],
["CH<sub>3</sub>","methyl","Methyl (ion)"],
["CH<sub>2</sub>","methylene","Methylene (ion)"],
["(CH<sub>3</sub>)<sub>3</sub>C<sub>2</sub>O<sub>2</sub>","memethacrylate","Methyl Methacrylate"],
["((CH<sub>3</sub>)<sub>3</sub>C<sub>2</sub>O<sub>2</sub>)<sub>3</sub>","pmma","Poly(methyl Methacrylate)"],
["Co(NO<sub>3</sub>)<sub>2</sub>","redPigment","Cobalt(ii) Nitrate"],
["K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>","orangePigment","Potassium Dichromate"],
["CrK<sub>2</sub>O<sub>4</sub>","yellowPigment","Potassium Chromate"],
["NiCl<sub>2</sub>","limePigment","Nickel(ii) Chloride"],
["CuSO<sub>4</sub>","lightbluePigment","Copper(ii) Sulfate"],
["KMnO<sub>4</sub>","purplePigment","Potassium Permanganate"],
["CoZnO<sub>2</sub>","greenPigment","Zinc Green"],
["CH<sub>2</sub>O","blackPigment","Carbon Black"],
["TiO<sub>2</sub>","whitePigment","Titanium Dioxide"],
["SiO<sub>3</sub>","metasilicate","Metasilicate"],
["Be<sub>3</sub>Al<sub>2</sub>(SiO<sub>3</sub>)<sub>6</sub>","beryl","Beryl"],
["C<sub>2</sub>H<sub>5</sub>OH","ethanol","Ethyl Alcohol"],
["C<sub>9</sub>H<sub>13</sub>N","amphetamine","Amphetamine"],
["C<sub>7</sub>H<sub>8</sub>N<sub>4</sub>O<sub>2</sub>","theobromine","Theobromine"],
["(C<sub>6</sub>H<sub>10</sub>O<sub>5</sub>)<sub>3</sub>","starch","Starch"],
["C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>","sucrose","Sucrose"],
["C<sub>4</sub>H<sub>6</sub>N<sub>2</sub>O<sub>2</sub>","pantherine","Pantherine"],
["Al<sub>2</sub>O<sub>3</sub>","aluminiumOxide","Aluminium Oxide"],
["C<sub>64</sub>C<sub>64</sub>C<sub>64</sub>C<sub>64</sub>","fullrene","Carbon Nanotubes"],
["C<sub>5</sub>H<sub>11</sub>NO<sub>2</sub>","valine","Valine"],
["C<sub>16</sub>H<sub>18</sub>N<sub>2</sub>O<sub>4</sub>S","penicillin","Penicillin"],
["C<sub>19</sub>H<sub>28</sub>O<sub>2</sub>","testosterone","Testosterone"],
["Al<sub>2</sub>Si<sub>2</sub>O<sub>5</sub>(OH)<sub>4</sub>","kaolinite","Kaolinite"],
["C<sub>19</sub>H<sub>33</sub>NO<sub>2</sub>","fingolimod","Fingolimod"],
["C<sub>6</sub>H<sub>14</sub>N<sub>4</sub>O<sub>2</sub>","arginine","Arginine"],
["C<sub>7</sub>H<sub>10</sub>O<sub>5</sub>","shikimicAcid","Shikimic Acid"],
["H<sub>2</sub>SO<sub>4</sub>","sulfuricAcid","Sulfuric Acid"],
["C<sub>3</sub>H<sub>8</sub>NO<sub>5</sub>P","glyphosate","Glyphosate"],
["C<sub>9</sub>H<sub>8</sub>O<sub>4</sub>","asprin","Aspirin"],
["C<sub>14</sub>H<sub>9</sub>Cl<sub>5</sub>","ddt","Ddt"],
["C<sub>16</sub>H<sub>28</sub>N<sub>4</sub>O<sub>8</sub>","dota","Dota"],
["C<sub>24</sub>H<sub>34</sub>O<sub>9</sub>","mycotoxin","T-<sub>2</sub> Mycotoxin"],
["NaCl","salt","Salt"],
["NH<sub>3</sub>","ammonia","Ammonia"],
["C<sub>41</sub>H<sub>60</sub>N<sub>8</sub>O<sub>10</sub>","nodularin","Nodularin"],
["C<sub>11</sub>H<sub>11</sub>N<sub>3</sub>O<sub>8</sub>","tetrodotoxin","Tetrodotoxin"],
["C<sub>21</sub>H<sub>30</sub>O<sub>2</sub>","thc","Thc"],
["C<sub>9</sub>H<sub>7</sub>MnO<sub>3</sub>","mt","Methylcyclopentadienyl Manganese Tricarbonyl"],
["LiC<sub>4</sub>H<sub>9</sub>","buli","Tert-butyllithium"],
["H<sub>2</sub>PtCl<sub>6</sub>","plat","Chloroplatinic Acid"],
["COCl<sub>2</sub>","phosgene","Phosgene"],
["C<sub>3</sub>H<sub>5</sub>OH","aalc","Allyl Alcohol"],
["C<sub>17</sub>H<sub>21</sub>NO","hist","Diphenhydramine"],
["C<sub>31</sub>H<sub>42</sub>N<sub>2</sub>O<sub>6</sub>","pal<sub>2</sub>","Batrachotoxin"],
["C<sub>20</sub>H<sub>29</sub>OH","retinol","Retinol"],
["C<sub>5</sub>H<sub>12</sub>O<sub>5</sub>","xylitol","Xylitol"],
["C<sub>8</sub>H<sub>8</sub>ClN<sub>3</sub>O<sub>2</sub>","weedex","Aminocyclopyrachlor"],
["C<sub>17</sub>H<sub>13</sub>ClN<sub>4</sub>","xanax","Alprazolam"],
["HCl","hcl","Hydrogen Chloride"],
["C<sub>17</sub>H<sub>21</sub>NO<sub>4</sub>","cocaine","Cocaine"],
["C<sub>17</sub>H<sub>21</sub>NO<sub>4</sub>HCl","cocainehcl","Cocaine Hydrochloride"],
["C<sub>15</sub>H<sub>18</sub>","blueorgodye","Guaiazulene"],
["C<sub>15</sub>H<sub>11</sub>O<sub>11</sub>","redorgodye","Pelargonidin"],
["C<sub>15</sub>H<sub>11</sub>O<sub>7</sub>","purpleorgodye","Delphinidin"],
["Fe<sub>2</sub>SiO<sub>4</sub>","olivine","Olivine"],
["C<sub>16</sub>H<sub>18</sub>N<sub>3</sub>SCl","metblue","Methylene Blue"],
["CH<sub>3</sub>OH","meoh","Methyl Alcohol"],
["C<sub>34</sub>H<sub>50</sub>O<sub>2</sub>","lcd","Cholesteryl Benzoate"],
["RaCl<sub>2</sub>","radchlor","Radium Chloride"],
["C<sub>21</sub>H<sub>26</sub>O<sub>6</sub>","caulerpenyne","Caulerpenyne"],
["C<sub>17</sub>H<sub>23</sub>NO<sub>4</sub>","latropine","Hyoscyamine"],
["C<sub>7</sub>H<sub>17</sub>O<sub>5</sub>","gallicacid","Gallic Acid"],
["C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>","glucose","Glucose"],
["(C<sub>7</sub>H<sub>17</sub>O<sub>5</sub>)<sub>10</sub>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>","tannicacid","Tannic Acid"],
["H<sub>2</sub>O<sub>2</sub>","hperox","Hydrogen Peroxide"],
["GaAs","galliumarsenide","Gallium Arsenide"],
["C<sub>2</sub>H<sub>5</sub>NO<sub>2</sub>C<sub>3</sub>H<sub>7</sub>NO<sub>3</sub>C<sub>2</sub>H<sub>5</sub>NO<sub>2</sub>C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub>C<sub>2</sub>H<sub>5</sub>NO<sub>2</sub>C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub>","fibroin","Fibroin"],
["AlPO<sub>4</sub>","aluminiumPhosphate","Aluminium Phosphate"],
["K<sub>2</sub>O","potassiumOxide","Potassium Oxide"],
["Na<sub>2</sub>O","sodiumOxide","Sodium Oxide"],
["CaAl<sub>2</sub>Si<sub>2</sub>O<sub>8</sub>","plagioclaseAnorthite","Anorthite"],
["NaAl<sub>2</sub>Si<sub>3</sub>O<sub>8</sub>","plagioclaseAlbite","Albite"],
["KAlSi<sub>3</sub>O<sub>8</sub>","orthoclase","Orthoclase"],
["KFe<sub>3</sub>AlSi<sub>3</sub>O<sub>10</sub>F<sub>2</sub>","biotite","Biotite"],
["NaFeAl<sub>2</sub>O<sub>6</sub>","augite","Augite"],
["Mg<sub>3</sub>Si<sub>4</sub>O<sub>10</sub>","talc","Talc"],
["C<sub>3</sub>H<sub>8</sub>","propane","Propane"],
["Mg<sub>2</sub>O<sub>4</sub>Si","peridot","Peridot"],
["Al<sub>2</sub>O<sub>4</sub>F<sub>2</sub>","topaz","Topaz"],
["Ca<sub>2</sub>Al<sub>3</sub>Si<sub>3</sub>O<sub>13</sub>H","zoisite","Zoisite"],
["C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub>S","cysteine","Cysteine"],
["C<sub>4</sub>H<sub>9</sub>NO<sub>3</sub>","threonine","Threonine"],
["C<sub>6</sub>H<sub>14</sub>N<sub>2</sub>O<sub>2</sub>","lysine","Lysine"],
["C<sub>5</sub>H<sub>11</sub>NO<sub>2</sub>S","methionine","Methionine"],
["C<sub>9</sub>H<sub>11</sub>NO<sub>3</sub>","tyrosine","Tyrosine"],
["C<sub>6</sub>H<sub>9</sub>N<sub>3</sub>O<sub>2</sub>","histidine","Histidine"],
["C<sub>9</sub>H<sub>11</sub>NO<sub>2</sub>","phenylalanine","Phenylalanine"],
["C<sub>5</sub>H<sub>10</sub>N<sub>2</sub>O<sub>3</sub>","glutamine","Glutamine"],
["C<sub>5</sub>H<sub>9</sub>NO<sub>2</sub>","proline","Proline"],
["C<sub>6</sub>H<sub>13</sub>NO<sub>2</sub>","leucine","Leucine"],
["C<sub>11</sub>H<sub>12</sub>N<sub>2</sub>O<sub>2</sub>","tryptophan","Tryptophan"],
["C<sub>4</sub>H<sub>7</sub>NO<sub>4</sub>","aspartate","Aspartate"],
["C<sub>6</sub>H<sub>13</sub>NO<sub>2</sub>","isoleucine","Isoleucine"],
["C<sub>5</sub>H<sub>9</sub>NO<sub>4</sub>","glutamates","Glutamic Acid"],
["C<sub>4</sub>H<sub>8</sub>N<sub>2</sub>O<sub>3</sub>","asparagine","Asparagine"],
["C<sub>4</sub>H<sub>9</sub>NO<sub>3</sub>C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub>SC<sub>5</sub>H<sub>9</sub>NO<sub>2</sub>C<sub>4</sub>H<sub>9</sub>NO<sub>3</sub>C<sub>5</sub>H<sub>9</sub>NO<sub>2</sub>C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub>SC<sub>5</sub>H<sub>9</sub>NO<sub>2</sub>","keratin","Keratin"],
["Mg<sub>3</sub>Si<sub>2</sub>O<sub>5</sub>(OH)<sub>4</sub>","asbestos","Asbestos"],
["LiOH","lithiumHydroxide","Lithium Hydroxide"],
["NaOH","sodiumHydroxide","Sodium Hydroxide"],
["KOH","potassiumHydroxide","Potassium Hydroxide"],
["RbOH","rubidiumHydroxide","Rubidium Hydroxide"],
["CsOH","cesiumHydroxide","Cesium Hydroxide"],
["FrOH","franciumHydroxide","Francium Hydroxide"],
["H<sub>2</sub>PO<sub>2</sub>","hypophosphite","Hypophosphite"],
["Al(H<sub>2</sub>PO<sub>2</sub>)<sub>3</sub>","aluminumHypophosphite","Aluminum Hypophosphite"],
["CaAlSi<sub>2</sub>O<sub>6</sub>","omphacite","Omphacite"],
["SiO<sub>4</sub>","silicate","Silicate"],
["Mg<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>","pyrope","Pyrope"],
["Fe<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>","almadine","Almandine"],
["Mn<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>","spessartine","Spessartine"],
["(Mg<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>)<sub>3</sub>(Fe<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>)<sub>5</sub>(Mn<sub>3</sub>Al<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>)<sub>8</sub>","redGarnet","Red Garnet"],
["Mg<sub>2</sub>SiO<sub>4</sub>","forsterite","Forsterite"],
["FeCr<sub>2</sub>O<sub>4</sub>","chromite","Chromite"],
["SiO","siliconOxide","Silicon Oxide"],
["FeO","ironOxide","Iron Oxide"],
["GaO<sub>2</sub>","galliumOxide","Gallium Oxide"],
["AsO<sub>2</sub>","arsenicOxide","Arsenic Oxide"],
["SO<sub>2</sub>","sulfurDioxide","Sulfur Dioxide"],
["H<sub>2</sub>S","hydrogenSulfide","Hydrogen Sulfide"],
["NaHSO<sub>4</sub>","sodiumBisulfate","Sodium Bisulfate"],
["Na<sub>2</sub>SO<sub>4</sub>","sodiumSulfate","Sodium Sulfate"],
];
