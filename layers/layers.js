var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Bufferbuffered_1 = new ol.format.GeoJSON();
var features_Bufferbuffered_1 = format_Bufferbuffered_1.readFeatures(json_Bufferbuffered_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bufferbuffered_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bufferbuffered_1.addFeatures(features_Bufferbuffered_1);
var lyr_Bufferbuffered_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bufferbuffered_1, 
                style: style_Bufferbuffered_1,
                popuplayertitle: "Buffer — buffered",
                interactive: false,
    title: 'Buffer — buffered<br />\
    <img src="styles/legend/Bufferbuffered_1_0.png" /> RS Advent Bandung<br />\
    <img src="styles/legend/Bufferbuffered_1_1.png" /> RS Al-Islam Bandung<br />\
    <img src="styles/legend/Bufferbuffered_1_2.png" /> RS AMC<br />\
    <img src="styles/legend/Bufferbuffered_1_3.png" /> RS Cicendo<br />\
    <img src="styles/legend/Bufferbuffered_1_4.png" /> RS Dr. H.A Rotinsulu<br />\
    <img src="styles/legend/Bufferbuffered_1_5.png" /> RS Dr. Hasan Sadikin<br />\
    <img src="styles/legend/Bufferbuffered_1_6.png" /> RS Dr. M. Salamun<br />\
    <img src="styles/legend/Bufferbuffered_1_7.png" /> RS Gigi Mulut Bandung<br />\
    <img src="styles/legend/Bufferbuffered_1_8.png" /> RS Halmahera Siaga<br />\
    <img src="styles/legend/Bufferbuffered_1_9.png" /> RS Hermina Arcamanik<br />\
    <img src="styles/legend/Bufferbuffered_1_10.png" /> RS Hermina Pasteur<br />\
    <img src="styles/legend/Bufferbuffered_1_11.png" /> RS Hermina Soreang<br />\
    <img src="styles/legend/Bufferbuffered_1_12.png" /> RS Immanuel<br />\
    <img src="styles/legend/Bufferbuffered_1_13.png" /> RS Kebon Jati<br />\
    <img src="styles/legend/Bufferbuffered_1_14.png" /> RS MAYAPADA<br />\
    <img src="styles/legend/Bufferbuffered_1_15.png" /> RS Melinda 2<br />\
    <img src="styles/legend/Bufferbuffered_1_16.png" /> RS Muhammadiyah Bandung<br />\
    <img src="styles/legend/Bufferbuffered_1_17.png" /> RS Muhammadiyah Bandung Selatan<br />\
    <img src="styles/legend/Bufferbuffered_1_18.png" /> RS Oetomo<br />\
    <img src="styles/legend/Bufferbuffered_1_19.png" /> RS Pindad<br />\
    <img src="styles/legend/Bufferbuffered_1_20.png" /> RS R.A Habibie<br />\
    <img src="styles/legend/Bufferbuffered_1_21.png" /> RS Rajawali<br />\
    <img src="styles/legend/Bufferbuffered_1_22.png" /> RS Santo Borromeus<br />\
    <img src="styles/legend/Bufferbuffered_1_23.png" /> RS Santo Yusup<br />\
    <img src="styles/legend/Bufferbuffered_1_24.png" /> RS Santosa Bandung Centra<br />\
    <img src="styles/legend/Bufferbuffered_1_25.png" /> RS Santosa Bandung Kopo<br />\
    <img src="styles/legend/Bufferbuffered_1_26.png" /> RS Sariningsih<br />\
    <img src="styles/legend/Bufferbuffered_1_27.png" /> RS Sartika Asih<br />\
    <img src="styles/legend/Bufferbuffered_1_28.png" /> RS Umum Bina Sehat<br />\
    <img src="styles/legend/Bufferbuffered_1_29.png" /> RS Umum Bungsu<br />\
    <img src="styles/legend/Bufferbuffered_1_30.png" /> RS Umum Daerah Al Ihsan<br />\
    <img src="styles/legend/Bufferbuffered_1_31.png" /> RS Umum Daerah Bedas Cimaung<br />\
    <img src="styles/legend/Bufferbuffered_1_32.png" /> RS Umum Daerah Bedas Kertasari<br />\
    <img src="styles/legend/Bufferbuffered_1_33.png" /> RS Umum Daerah Cicalengka<br />\
    <img src="styles/legend/Bufferbuffered_1_34.png" /> RS Umum Daerah Kesehatan Kerja <br />\
    <img src="styles/legend/Bufferbuffered_1_35.png" /> RS Umum Daerah Majalaya<br />\
    <img src="styles/legend/Bufferbuffered_1_36.png" /> RS Umum Daerah Oto Iskandar Di Nata<br />\
    <img src="styles/legend/Bufferbuffered_1_37.png" /> RS Umum Karya Pangalengan Bhakti Seha<br />\
    <img src="styles/legend/Bufferbuffered_1_38.png" /> RS Umum TNI AU Lanud Sulaiman<br />\
    <img src="styles/legend/Bufferbuffered_1_39.png" /> RS Unggul Karsa Medika<br />\
    <img src="styles/legend/Bufferbuffered_1_40.png" /> RS Unpad Bandung<br />\
    <img src="styles/legend/Bufferbuffered_1_41.png" /> RSIA Al-Islam<br />\
    <img src="styles/legend/Bufferbuffered_1_42.png" /> RSIA Harapan Bunda Bandung<br />\
    <img src="styles/legend/Bufferbuffered_1_43.png" /> RSIA Humana Prima<br />\
    <img src="styles/legend/Bufferbuffered_1_44.png" /> RSIA Kota Bandung<br />\
    <img src="styles/legend/Bufferbuffered_1_45.png" /> RSIA Limijati<br />\
    <img src="styles/legend/Bufferbuffered_1_46.png" /> RSIA Melinda<br />\
    <img src="styles/legend/Bufferbuffered_1_47.png" /> RSUD Kota Bandung<br />\
    <img src="styles/legend/Bufferbuffered_1_48.png" /> <br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Bufferbuffered_1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Bufferbuffered_1,lyr__2];
lyr_Bufferbuffered_1.set('fieldAliases', {'fid': 'fid', 'latitude': 'latitude', 'longitude': 'longitude', 'Nama': 'Nama', 'Gambar': 'Gambar', 'Alamat': 'Alamat', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'latitude': 'latitude', 'longitude': 'longitude', 'Nama': 'Nama', 'Gambar': 'Gambar', 'Alamat': 'Alamat', 'Tipe ': 'Tipe ', 'Kapasitas': 'Kapasitas', 'Kabupaten': 'Kabupaten', });
lyr_Bufferbuffered_1.set('fieldImages', {'fid': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Nama': 'TextEdit', 'Gambar': 'TextEdit', 'Alamat': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Nama': 'TextEdit', 'Gambar': 'ExternalResource', 'Alamat': 'TextEdit', 'Tipe ': 'TextEdit', 'Kapasitas': 'Range', 'Kabupaten': 'TextEdit', });
lyr_Bufferbuffered_1.set('fieldLabels', {'fid': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Nama': 'inline label - always visible', 'Gambar': 'inline label - always visible', 'Alamat': 'inline label - always visible', });
lyr__2.set('fieldLabels', {'fid': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Nama': 'inline label - always visible', 'Gambar': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Tipe ': 'inline label - always visible', 'Kapasitas': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});