# Earth Information Center Mobile Concept Application

The Earth Information Center Mobile application concept is a custom application that uses NASA SVS videos for visualization and image services for analysis. By tying the visualizations to the underlying data in a custom application, NASA Earth data becomes more accessible and easier to understand for the public. The application provides the most up-to-date information as the underlying services are updated by dynamically reading the configured video and image services. And finally, this application offers a mobile-first experience, allowing anyone to explore the application in its entirety from their mobile device 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. Before deploying outside of testing, you will want to configure the ```config.json``` file to point the application to the proper video and image service endpoints.

### Prerequisites

What things you need to install the software and how to install them

* [Git](https://github.com/git-guides/install-git) - Version Control System
* [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) - Version Control System
* [Node.js](https://nodejs.org/en/download/package-manager) - JavaScript Runtime Environment
* [React + Vite](https://vitejs.dev/) - Web Framework

### Installing

Clone the GitHub Repo

```
git clone https://github.com/cwaltsgeo/EIC-Mobile.git
```

Navigate to the ```EIC-Mobile``` project folder

```
cd EIC-Mobile
```

Install the ```EIC-Mobile``` project dependencies

```
npm install
```

Test in dev mode

```
npm run dev
```

End with an example of getting some data out of the system or using it for a little demo

## Configuration

The ```config.json``` file is a vital metadata file that points the application to the proper video and image service endpoints. For the application to run properly, it’s important to configure the file according to the following parameters.

| Property | Data Type | Description|
|----------|----------|----------|
| ```name```            | string    | Layer Name                                                |
| ```description```     | string    | Layer Description                                         |
| ```unit```            | string    | Unit of Measurement                                       |
| ```video```           | string    | Video Service endpoint                                    |
| ```service```         | string    | Image Service REST endpoint                               |
| ```active```          | boolean   | Value determines what layer is visible                    |
| ```vitals```          | dict      | A dictionary of summary statistics from the Image Service |
| ```tour```            | list      | A list of stops for the layer's Guided Tour               |

## Deployment

In order to deploy this application to a live system, you'll need to first establish the following architecture:

* [ArcGIS Enterprise](https://enterprise.arcgis.com/en/) - Image Services
* [AWS S3](https://aws.amazon.com/s3/) - Video Services
* [AWS S3 + CloudFront](https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/deploy-a-react-based-single-page-application-to-amazon-s3-and-cloudfront.html) - Application Deployment


Configure ```config.json``` with the proper metadata and service endpoints

```
vi ./src/config.json
```

Build the project ```dist``` folder

```
npm run build
```

Upload the project ```dist``` folder to AWS S3

```
aws s3 sync ./dist s3://<your-bucket-name>/ 
```

## Application Built With

* [React + Vite](https://vitejs.dev/guide/) - Web Framework
* [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) - GIS SDK
* [Chart.js](https://www.chartjs.org/) - Data Visualization Library
* [Tailwind.css](https://tailwindcss.com/) - CSS Framework
* [HeadlessUI](https://headlessui.com/) - UI Components
* [Heroicons](https://heroicons.com/) - Icons
* [React Share](https://github.com/nygardk/react-share#readme) - Social Media Sharing

## Authors

* **Cole Walts** - *Developer* - [cwaltsgeo](https://github.com/cwaltsgeo)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* NASA Scientific Visualization Studio
