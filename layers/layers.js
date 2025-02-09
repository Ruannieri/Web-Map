var wms_layers = [];

var lyr_Recortadomascara_0 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Recortado (mascara)',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Recortadomascara_0.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-5213604.655387, -2754870.802587, -5161205.147409, -2674882.226670]
                            })
                        });
var format_BairrosSPcopiar_1 = new ol.format.GeoJSON();
var features_BairrosSPcopiar_1 = format_BairrosSPcopiar_1.readFeatures(json_BairrosSPcopiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BairrosSPcopiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BairrosSPcopiar_1.addFeatures(features_BairrosSPcopiar_1);
var lyr_BairrosSPcopiar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BairrosSPcopiar_1, 
                style: style_BairrosSPcopiar_1,
                popuplayertitle: 'Bairros SP  copiar',
                interactive: true,
                title: '<img src="styles/legend/BairrosSPcopiar_1.png" /> Bairros SP  copiar'
            });
var format_MetrSP_2 = new ol.format.GeoJSON();
var features_MetrSP_2 = format_MetrSP_2.readFeatures(json_MetrSP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MetrSP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MetrSP_2.addFeatures(features_MetrSP_2);
var lyr_MetrSP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MetrSP_2, 
                style: style_MetrSP_2,
                popuplayertitle: 'Metrô SP',
                interactive: true,
                title: '<img src="styles/legend/MetrSP_2.png" /> Metrô SP'
            });

lyr_Recortadomascara_0.setVisible(true);lyr_BairrosSPcopiar_1.setVisible(true);lyr_MetrSP_2.setVisible(true);
var layersList = [lyr_Recortadomascara_0,lyr_BairrosSPcopiar_1,lyr_MetrSP_2];
lyr_BairrosSPcopiar_1.set('fieldAliases', {'primaryindex': 'primaryindex', 'ds_nome': 'ds_nome', 'ds_codigo': 'ds_codigo', 'ds_cd_sub': 'ds_cd_sub', 'ds_subpref': 'ds_subpref', 'ds_sigla': 'ds_sigla', 'ds_areamt': 'ds_areamt', 'ds_areakm': 'ds_areakm', });
lyr_MetrSP_2.set('fieldAliases', {'primaryindex': 'primaryindex', 'emt_nome': 'emt_nome', 'emt_linha': 'emt_linha', 'emt_empres': 'emt_empres', 'emt_situac': 'emt_situac', });
lyr_BairrosSPcopiar_1.set('fieldImages', {'primaryindex': 'TextEdit', 'ds_nome': 'TextEdit', 'ds_codigo': 'TextEdit', 'ds_cd_sub': 'TextEdit', 'ds_subpref': 'TextEdit', 'ds_sigla': 'TextEdit', 'ds_areamt': 'TextEdit', 'ds_areakm': 'TextEdit', });
lyr_MetrSP_2.set('fieldImages', {'primaryindex': '', 'emt_nome': '', 'emt_linha': '', 'emt_empres': '', 'emt_situac': '', });
lyr_BairrosSPcopiar_1.set('fieldLabels', {'primaryindex': 'no label', 'ds_nome': 'no label', 'ds_codigo': 'no label', 'ds_cd_sub': 'no label', 'ds_subpref': 'no label', 'ds_sigla': 'no label', 'ds_areamt': 'no label', 'ds_areakm': 'no label', });
lyr_MetrSP_2.set('fieldLabels', {'primaryindex': 'no label', 'emt_nome': 'no label', 'emt_linha': 'no label', 'emt_empres': 'no label', 'emt_situac': 'no label', });
lyr_MetrSP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});