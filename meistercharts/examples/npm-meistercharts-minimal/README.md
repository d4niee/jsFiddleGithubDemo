## Getting Started
This is an example that shows how to use MeisterCharts with the NPM package
Manager for your Project

### System Requirements

#### Node.js
Before installing and using the NPM package manager, you will need to have Node.js installed. To see if you already have Node.js installed,
type the following command into your local command line terminal:
```shell
node -v
```
If you see a version number node is installed.
To install Node.js, follow <a href="https://nodejs.org/en">this link</a>

Now you have all you need to use the MeisterCharts API.

### Add MeisterCharts to an existing NPM Project

#### 1. Adding Dependencies
add meistercharts to the dependencies:
```shell
npm install @meistercharts/meistercharts
```
Your ``package.json`` should now contain the MeisterCharts dependency:
```json
"dependencies": {
  "@meistercharts/meistercharts": "^1.31.0"
}
```
That is all you need to do. Now your project is ready to use MeisterCharts.
The next step is to implement meistercharts in your code

#### Load MeisterCharts with require and create your first Chart
In this code we implement MeisterCharts and create a new ``TimeLineChart``
```js
const meisterCharts = require('@meistercharts/meistercharts/meistercharts-easy-api');
// create a new TimeLineChart
meisterCharts.createTimeLineChartFromId('timeLineChart');
```

* Add a new div to your Webpage. The ID of the div is accessed by the ``createTimeLineChartFromId`` and the
  chart will be created in this container.

```HTML
<div id="timeLineChart" style="width: 500px; height: 200px;"></div>
```

After we created the chart you should now see the following chart on your browser
<p align="center">
<img src="img/TimeLineChartMinimal.png">
</p>

* If you are facing problems you can view the example project files

### Run this example project
First you need to install all Dependencies:
```shell
npm install
```

After installing all dependencies we need to bundle our resources
for our webpage

```shell
npx webpack
```

That's all you need to do. You can now open the ``src/index.html``
in your browser and see the example chart
