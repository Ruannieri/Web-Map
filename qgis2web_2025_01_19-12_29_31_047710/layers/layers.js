var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ne_10m_airportsshp_1 = new ol.format.GeoJSON();
var features_ne_10m_airportsshp_1 = format_ne_10m_airportsshp_1.readFeatures(json_ne_10m_airportsshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_airportsshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_airportsshp_1.addFeatures(features_ne_10m_airportsshp_1);
var lyr_ne_10m_airportsshp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_airportsshp_1, 
                style: style_ne_10m_airportsshp_1,
                popuplayertitle: 'ne_10m_airports.shp',
                interactive: true,
    title: 'ne_10m_airports.shp<br />\
    <img src="styles/legend/ne_10m_airportsshp_1_0.png" /> Major Airport<br />\
    <img src="styles/legend/ne_10m_airportsshp_1_1.png" /> Mid Airport<br />\
    <img src="styles/legend/ne_10m_airportsshp_1_2.png" /> Small Airport<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_ne_10m_airportsshp_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ne_10m_airportsshp_1];
lyr_ne_10m_airportsshp_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'Tipo', 'name': 'Nome', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', 'Type': 'Type', });
lyr_ne_10m_airportsshp_1.set('fieldImages', {'scalerank': 'Hidden', 'featurecla': 'Hidden', 'type': 'TextEdit', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', 'Type': 'TextEdit', });
lyr_ne_10m_airportsshp_1.set('fieldLabels', {'type': 'hidden field', 'name': 'no label', 'iata_code': 'header label - always visible', 'wikipedia': 'no label', 'Type': 'no label', });
lyr_ne_10m_airportsshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});