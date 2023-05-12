# Machine-learning-assisted creation of optimally located STEM programs

## Urban Project 1 - STEM Education Programs in Chicago

[[_TOC_]]

## Team Members

- [Clément Sicard](mailto:csicard@student.ethz.ch)
- [Kajetan Pyszkowski](mailto:kpyszkowski@student.ethz.ch)
- [Alexis Tabin](mailto:atabin@student.ethz.ch)

## Project Description

Based on multiple socio-economic criteria, where should the City of Chicago add new STEM education programs to fight crime and unemployment?

### Users

Ministry of Education of City of Chicago administration

### Datasets

- [x] [Chicago Neighborhoods](https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Neighborhoods/bbvz-uum9)
- [x] [Crime data](https://data.cityofchicago.org/Public-Safety/Crimes-Map/dfnk-7re6)
- [x] [Library locations](https://data.cityofchicago.org/Education/Libraries-Locations-Contact-Information-and-Usual-/x8fc-8rcq)
- [x] [School locations](https://data.cityofchicago.org/Education/Chicago-Public-Schools-School-Locations-SY2021/p83k-txqt)
- [x] [Ward boundaries](https://data.cityofchicago.org/Facilities-Geographic-Boundaries/Boundaries-Wards-2015-/sp34-6z76)
- [x] [Average income per neighborhood (2014)](http://www.chicagocomputerclasses.com/average-city-chicago-income/)
- [x] [Unemployment per ward/neighborhood (2008 - 2012)](https://data.cityofchicago.org/Health-Human-Services/Census-Data-Selected-socioeconomic-indicators-in-C/kn9c-c2s2/data)

(More to see on the [report](docs/XAIML%20-%20PROJECT%20REPORT%20&%20CONTRIBUTION%20STATEMENT.pdf))

### Tasks

- Visualize various variables related to education such as school success existing learning centers, crime rate.
- Predict optimal locations for the creation of new STEM education programs
- Have the end user decide what factors to take into account, and what importance to give to each of them

---


## Folder Structure 


Specify here the structure of you code and comment what the most important files contain

<details>
  <summary markdown="span"><b>Expand to see folder structure</b></summary>

```bash
.
├── README.md
├── XAIML - FDS.pdf
├── backend-project
│   ├── api.py
│   ├── data
│   │   ├── average_income_by_comarea.csv
│   │   ├── average_income_by_comarea_unprocessed.csv
│   │   ├── comarea_name_to_number.pkl
│   │   ├── comarea_number_to_name.pkl
│   │   ├── community_areas.geojson
│   │   ├── crimes.csv
│   │   ├── crimes_2001_present.csv
│   │   ├── crimes_21.csv
│   │   ├── crimes_22.csv
│   │   ├── crimes_by_comarea.geojson
│   │   ├── crimes_by_ward_geo.geojson
│   │   ├── crimes_by_year.csv
│   │   ├── crimes_per_ward.csv
│   │   ├── dataset_circles.csv
│   │   ├── dataset_crimes.csv
│   │   ├── dataset_crimes.geojson
│   │   ├── dataset_crimes_small.geojson
│   │   ├── dataset_libraries.geojson
│   │   ├── dataset_libraries_locations.csv
│   │   ├── dataset_neighborhoods.geojson
│   │   ├── dataset_public_schools_locations.geojson
│   │   ├── dataset_wards.geojson
│   │   ├── libraries.geojson
│   │   ├── libraries_by_comarea.geojson
│   │   ├── normalized_predictions.geojson
│   │   ├── optimize_predictions.geojson
│   │   ├── pop_com_area.csv
│   │   ├── schools.geojson
│   │   ├── schools_by_comarea.geojson
│   │   ├── stats_by_comarea.csv
│   │   ├── stats_by_comarea.geojson
│   │   ├── types_of_crime.csv
│   │   └── zip_codes.geojson
│   ├── helpers
│   │   ├── comm_area_helper.py
│   │   ├── create_dictionaries.py
│   │   ├── graphs_helper.py
│   │   ├── legend.py
│   │   ├── map_helper.py
│   │   ├── map_settings.json
│   │   └── predictions.py
│   ├── model.py
│   ├── notebooks
│   │   ├── average_income_by_comarea.ipynb
│   │   ├── basic_model.ipynb
│   │   ├── colormaps.ipynb
│   │   ├── crimes_by_comarea.ipynb
│   │   ├── crimes_by_ward.ipynb
│   │   ├── explore_data.ipynb
│   │   ├── fix_plotly.ipynb
│   │   ├── future_libraries.ipynb
│   │   ├── future_schools.ipynb
│   │   ├── graphs
│   │   │   ├── average_income_graphs.ipynb
│   │   │   ├── crimes_graphs.ipynb
│   │   │   ├── libraries_graphs.ipynb
│   │   │   └── population_density.ipynb
│   │   ├── graphs_crimes_by_area.ipynb
│   │   ├── libraries_by_comarea.ipynb
│   │   ├── predictions.ipynb
│   │   ├── schools.ipynb
│   │   ├── schools_by_comarea.ipynb
│   │   ├── stats_by_comarea.ipynb
│   │   ├── test.ipynb
│   │   └── unemployment.ipynb
│   └── requirements.txt
├── frontend-flutter
│   ├── README.md
│   ├── analysis_options.yaml
│   ├── lib
│   │   ├── api.dart
│   │   ├── generated_plugin_registrant.dart
│   │   ├── home.dart
│   │   └── main.dart
│   ├── pubspec.lock
│   └── pubspec.yaml
├── run_backend.sh
└── run_frontend.sh
```

</details>
