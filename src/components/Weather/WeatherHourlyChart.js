import React from "react";
import { Line, Bar } from "react-chartjs-2";

function WeatherHourlyChart({ weatherData, settings }) {
  const currentDay = weatherData.days[0];
  const hourlyLabels = currentDay.hours.map((hour) => hour.datetime);
  const hourlyTemp = currentDay.hours.map((hour) =>
    settings.unit === "metric" ? ((hour.temp - 32) * 5) / 9 : hour.temp
  );
  const hourlyFeelsLike = currentDay.hours.map((hour) =>
    settings.unit === "metric" ? ((hour.feelslike - 32) * 5) / 9 : hour.feelslike
  );
  const hourlyWindSpeed = currentDay.hours.map((hour) => hour.windspeed);
  const hourlyCloudCover = currentDay.hours.map((hour) => hour.cloudcover);

  return (
    <div>
      <h2>Today's weather details</h2>
      <Line
        data={{
          labels: hourlyLabels,
          datasets: [
            {
              label: `Temperature (${settings.unit === "metric" ? "°C" : "°F"})`,
              data: hourlyTemp,
              borderColor: "blue",
              fill: false,
            },
            {
              label: `Perceived Temperature (${settings.unit === "metric" ? "°C" : "°F"})`,
              data: hourlyFeelsLike,
              borderColor: "green",
              fill: false,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: `Today's Temperature and Perceived Temperature`,
            },
          },
        }}
      />

      <Bar
            data={{
              labels: hourlyLabels,
              datasets: [
                {
                  label: "Cloud Cover (%)",
                  data: hourlyCloudCover,
                  backgroundColor: "rgba(135, 206, 250, 0.5)",
                }
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: `Cloud Cover`,
                },
              },
            }}
      />
      <Bar
            data={{
              labels: hourlyLabels,
              datasets: [
                {
                  label: "Wind Speed (km/h)",
                  data: hourlyWindSpeed,
                  backgroundColor: "rgba(255, 165, 0, 0.5)",
                }
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                },
                title: {
                  display: true,
                  text: `Wind Speed`,
                },
              },
            }}
      />
    </div>
  );
}

export default WeatherHourlyChart;
