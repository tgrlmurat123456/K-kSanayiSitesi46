var wms_layers = [];


        var lyr_GOOGLEUYDU_0 = new ol.layer.Tile({
            'title': 'GOOGLE UYDU',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_METN_1 = new ol.format.GeoJSON();
var features_METN_1 = format_METN_1.readFeatures(json_METN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_METN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_METN_1.addFeatures(features_METN_1);
var lyr_METN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_METN_1,
maxResolution:6.931105372684836,
 
                style: style_METN_1,
                popuplayertitle: 'METİN',
                interactive: true,
                title: '<img src="styles/legend/METN_1.png" /> METİN'
            });
var format_METN2_2 = new ol.format.GeoJSON();
var features_METN2_2 = format_METN2_2.readFeatures(json_METN2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_METN2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_METN2_2.addFeatures(features_METN2_2);
var lyr_METN2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_METN2_2,
maxResolution:1.9603126306583372,
 
                style: style_METN2_2,
                popuplayertitle: ' METİN 2',
                interactive: true,
                title: '<img src="styles/legend/METN2_2.png" />  METİN 2'
            });
var format_KIRMIZIZG_3 = new ol.format.GeoJSON();
var features_KIRMIZIZG_3 = format_KIRMIZIZG_3.readFeatures(json_KIRMIZIZG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KIRMIZIZG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KIRMIZIZG_3.addFeatures(features_KIRMIZIZG_3);
var lyr_KIRMIZIZG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KIRMIZIZG_3, 
                style: style_KIRMIZIZG_3,
                popuplayertitle: 'KIRMIZI ÇİZGİ ',
                interactive: true,
                title: '<img src="styles/legend/KIRMIZIZG_3.png" /> KIRMIZI ÇİZGİ '
            });
var format_MAVZG_4 = new ol.format.GeoJSON();
var features_MAVZG_4 = format_MAVZG_4.readFeatures(json_MAVZG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAVZG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAVZG_4.addFeatures(features_MAVZG_4);
var lyr_MAVZG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAVZG_4, 
                style: style_MAVZG_4,
                popuplayertitle: 'MAVİ ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/MAVZG_4.png" /> MAVİ ÇİZGİ'
            });
var format_YELZG_5 = new ol.format.GeoJSON();
var features_YELZG_5 = format_YELZG_5.readFeatures(json_YELZG_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_YELZG_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_YELZG_5.addFeatures(features_YELZG_5);
var lyr_YELZG_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_YELZG_5, 
                style: style_YELZG_5,
                popuplayertitle: 'YEŞİL ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/YELZG_5.png" /> YEŞİL ÇİZGİ'
            });
var format_PEMPEZG_6 = new ol.format.GeoJSON();
var features_PEMPEZG_6 = format_PEMPEZG_6.readFeatures(json_PEMPEZG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMPEZG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMPEZG_6.addFeatures(features_PEMPEZG_6);
var lyr_PEMPEZG_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMPEZG_6, 
                style: style_PEMPEZG_6,
                popuplayertitle: 'PEMPE ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/PEMPEZG_6.png" /> PEMPE ÇİZGİ'
            });
var format_SARIZG_7 = new ol.format.GeoJSON();
var features_SARIZG_7 = format_SARIZG_7.readFeatures(json_SARIZG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARIZG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARIZG_7.addFeatures(features_SARIZG_7);
var lyr_SARIZG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARIZG_7, 
                style: style_SARIZG_7,
                popuplayertitle: 'SARI ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/SARIZG_7.png" /> SARI ÇİZGİ'
            });
var format_TURUNCUZG_8 = new ol.format.GeoJSON();
var features_TURUNCUZG_8 = format_TURUNCUZG_8.readFeatures(json_TURUNCUZG_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TURUNCUZG_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TURUNCUZG_8.addFeatures(features_TURUNCUZG_8);
var lyr_TURUNCUZG_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TURUNCUZG_8, 
                style: style_TURUNCUZG_8,
                popuplayertitle: 'TURUNCU ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/TURUNCUZG_8.png" /> TURUNCU ÇİZGİ'
            });
var format_TURKUAZZG_9 = new ol.format.GeoJSON();
var features_TURKUAZZG_9 = format_TURKUAZZG_9.readFeatures(json_TURKUAZZG_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TURKUAZZG_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TURKUAZZG_9.addFeatures(features_TURKUAZZG_9);
var lyr_TURKUAZZG_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TURKUAZZG_9, 
                style: style_TURKUAZZG_9,
                popuplayertitle: 'TURKUAZ ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/TURKUAZZG_9.png" /> TURKUAZ ÇİZGİ'
            });
var format_MORZG_10 = new ol.format.GeoJSON();
var features_MORZG_10 = format_MORZG_10.readFeatures(json_MORZG_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MORZG_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MORZG_10.addFeatures(features_MORZG_10);
var lyr_MORZG_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MORZG_10, 
                style: style_MORZG_10,
                popuplayertitle: 'MOR ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/MORZG_10.png" /> MOR ÇİZGİ'
            });
var format_BEYAZZG_11 = new ol.format.GeoJSON();
var features_BEYAZZG_11 = format_BEYAZZG_11.readFeatures(json_BEYAZZG_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEYAZZG_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEYAZZG_11.addFeatures(features_BEYAZZG_11);
var lyr_BEYAZZG_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BEYAZZG_11, 
                style: style_BEYAZZG_11,
                popuplayertitle: 'BEYAZ ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/BEYAZZG_11.png" /> BEYAZ ÇİZGİ'
            });
var format_KAHVERENGZG_12 = new ol.format.GeoJSON();
var features_KAHVERENGZG_12 = format_KAHVERENGZG_12.readFeatures(json_KAHVERENGZG_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAHVERENGZG_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAHVERENGZG_12.addFeatures(features_KAHVERENGZG_12);
var lyr_KAHVERENGZG_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KAHVERENGZG_12, 
                style: style_KAHVERENGZG_12,
                popuplayertitle: 'KAHVERENGİ ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/KAHVERENGZG_12.png" /> KAHVERENGİ ÇİZGİ'
            });
var format_SYAHZG_13 = new ol.format.GeoJSON();
var features_SYAHZG_13 = format_SYAHZG_13.readFeatures(json_SYAHZG_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SYAHZG_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SYAHZG_13.addFeatures(features_SYAHZG_13);
var lyr_SYAHZG_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SYAHZG_13, 
                style: style_SYAHZG_13,
                popuplayertitle: 'SİYAH ÇİZGİ',
                interactive: true,
                title: '<img src="styles/legend/SYAHZG_13.png" /> SİYAH ÇİZGİ'
            });

lyr_GOOGLEUYDU_0.setVisible(true);lyr_METN_1.setVisible(true);lyr_METN2_2.setVisible(true);lyr_KIRMIZIZG_3.setVisible(true);lyr_MAVZG_4.setVisible(true);lyr_YELZG_5.setVisible(true);lyr_PEMPEZG_6.setVisible(true);lyr_SARIZG_7.setVisible(true);lyr_TURUNCUZG_8.setVisible(true);lyr_TURKUAZZG_9.setVisible(true);lyr_MORZG_10.setVisible(true);lyr_BEYAZZG_11.setVisible(true);lyr_KAHVERENGZG_12.setVisible(true);lyr_SYAHZG_13.setVisible(true);
var layersList = [lyr_GOOGLEUYDU_0,lyr_METN_1,lyr_METN2_2,lyr_KIRMIZIZG_3,lyr_MAVZG_4,lyr_YELZG_5,lyr_PEMPEZG_6,lyr_SARIZG_7,lyr_TURUNCUZG_8,lyr_TURKUAZZG_9,lyr_MORZG_10,lyr_BEYAZZG_11,lyr_KAHVERENGZG_12,lyr_SYAHZG_13];
lyr_METN_1.set('fieldAliases', {'fid': 'fid', 'METİN': 'METİN', });
lyr_METN2_2.set('fieldAliases', {'fid': 'fid', 'METİN 2': 'METİN 2', });
lyr_KIRMIZIZG_3.set('fieldAliases', {'fid': 'fid', });
lyr_MAVZG_4.set('fieldAliases', {'fid': 'fid', });
lyr_YELZG_5.set('fieldAliases', {'fid': 'fid', });
lyr_PEMPEZG_6.set('fieldAliases', {'fid': 'fid', });
lyr_SARIZG_7.set('fieldAliases', {'fid': 'fid', });
lyr_TURUNCUZG_8.set('fieldAliases', {'fid': 'fid', });
lyr_TURKUAZZG_9.set('fieldAliases', {'fid': 'fid', });
lyr_MORZG_10.set('fieldAliases', {'fid': 'fid', });
lyr_BEYAZZG_11.set('fieldAliases', {'fid': 'fid', });
lyr_KAHVERENGZG_12.set('fieldAliases', {'fid': 'fid', });
lyr_SYAHZG_13.set('fieldAliases', {'fid': 'fid', });
lyr_METN_1.set('fieldImages', {'fid': '', 'METİN': '', });
lyr_METN2_2.set('fieldImages', {'fid': '', 'METİN 2': '', });
lyr_KIRMIZIZG_3.set('fieldImages', {'fid': '', });
lyr_MAVZG_4.set('fieldImages', {'fid': '', });
lyr_YELZG_5.set('fieldImages', {'fid': '', });
lyr_PEMPEZG_6.set('fieldImages', {'fid': '', });
lyr_SARIZG_7.set('fieldImages', {'fid': '', });
lyr_TURUNCUZG_8.set('fieldImages', {'fid': '', });
lyr_TURKUAZZG_9.set('fieldImages', {'fid': '', });
lyr_MORZG_10.set('fieldImages', {'fid': '', });
lyr_BEYAZZG_11.set('fieldImages', {'fid': 'TextEdit', });
lyr_KAHVERENGZG_12.set('fieldImages', {'fid': '', });
lyr_SYAHZG_13.set('fieldImages', {'fid': '', });
lyr_METN_1.set('fieldLabels', {'fid': 'no label', 'METİN': 'no label', });
lyr_METN2_2.set('fieldLabels', {'fid': 'no label', 'METİN 2': 'no label', });
lyr_KIRMIZIZG_3.set('fieldLabels', {'fid': 'no label', });
lyr_MAVZG_4.set('fieldLabels', {'fid': 'no label', });
lyr_YELZG_5.set('fieldLabels', {'fid': 'no label', });
lyr_PEMPEZG_6.set('fieldLabels', {'fid': 'no label', });
lyr_SARIZG_7.set('fieldLabels', {'fid': 'no label', });
lyr_TURUNCUZG_8.set('fieldLabels', {'fid': 'no label', });
lyr_TURKUAZZG_9.set('fieldLabels', {'fid': 'no label', });
lyr_MORZG_10.set('fieldLabels', {'fid': 'no label', });
lyr_BEYAZZG_11.set('fieldLabels', {'fid': 'no label', });
lyr_KAHVERENGZG_12.set('fieldLabels', {'fid': 'no label', });
lyr_SYAHZG_13.set('fieldLabels', {'fid': 'no label', });
lyr_SYAHZG_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});