const Influx  = require('influx');
const os      = require('os');
const influx  = new Influx.InfluxDB({
  host: 'localhost',
  database: 'test',
  schema: [
    {
      measurement: 'Readings',
      fields: {
        Device: Influx.FieldType.STRING,
        Value: Influx.FieldType.STRING
      },
      tags: [
        'read_os'
      ] 
    }
  ]
})

console.log("Started");

function insertDB(dev, data){
	influx.writePoints([
		{
		  measurement: 'Readings', 
		  tags:   { read_os: os.hostname() },
		  fields: { Device: dev, Value: data },
		}
	]);
}

