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
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "",
                interactive: true,
    title: '<br />\
    <img src="styles/legend/_1_0.png" /> RS Advent Bandung<br />\
    <img src="styles/legend/_1_1.png" /> RS Al-Islam Bandung<br />\
    <img src="styles/legend/_1_2.png" /> RS AMC<br />\
    <img src="styles/legend/_1_3.png" /> RS Cicendo<br />\
    <img src="styles/legend/_1_4.png" /> RS Dr. H.A Rotinsulu<br />\
    <img src="styles/legend/_1_5.png" /> RS Dr. Hasan Sadikin<br />\
    <img src="styles/legend/_1_6.png" /> RS Dr. M. Salamun<br />\
    <img src="styles/legend/_1_7.png" /> RS Gigi Mulut Bandung<br />\
    <img src="styles/legend/_1_8.png" /> RS Halmahera Siaga<br />\
    <img src="styles/legend/_1_9.png" /> RS Hermina Arcamanik<br />\
    <img src="styles/legend/_1_10.png" /> RS Hermina Pasteur<br />\
    <img src="styles/legend/_1_11.png" /> RS Hermina Soreang<br />\
    <img src="styles/legend/_1_12.png" /> RS Immanuel<br />\
    <img src="styles/legend/_1_13.png" /> RS Kebon Jati<br />\
    <img src="styles/legend/_1_14.png" /> RS MAYAPADA<br />\
    <img src="styles/legend/_1_15.png" /> RS Melinda 2<br />\
    <img src="styles/legend/_1_16.png" /> RS Muhammadiyah Bandung<br />\
    <img src="styles/legend/_1_17.png" /> RS Muhammadiyah Bandung Selatan<br />\
    <img src="styles/legend/_1_18.png" /> RS Oetomo<br />\
    <img src="styles/legend/_1_19.png" /> RS Pindad<br />\
    <img src="styles/legend/_1_20.png" /> RS R.A Habibie<br />\
    <img src="styles/legend/_1_21.png" /> RS Rajawali<br />\
    <img src="styles/legend/_1_22.png" /> RS Santo Borromeus<br />\
    <img src="styles/legend/_1_23.png" /> RS Santo Yusup<br />\
    <img src="styles/legend/_1_24.png" /> RS Santosa Bandung Centra<br />\
    <img src="styles/legend/_1_25.png" /> RS Santosa Bandung Kopo<br />\
    <img src="styles/legend/_1_26.png" /> RS Sariningsih<br />\
    <img src="styles/legend/_1_27.png" /> RS Sartika Asih<br />\
    <img src="styles/legend/_1_28.png" /> RS Umum Bina Sehat<br />\
    <img src="styles/legend/_1_29.png" /> RS Umum Bungsu<br />\
    <img src="styles/legend/_1_30.png" /> RS Umum Daerah Al Ihsan<br />\
    <img src="styles/legend/_1_31.png" /> RS Umum Daerah Bedas Cimaung<br />\
    <img src="styles/legend/_1_32.png" /> RS Umum Daerah Bedas Kertasari<br />\
    <img src="styles/legend/_1_33.png" /> RS Umum Daerah Cicalengka<br />\
    <img src="styles/legend/_1_34.png" /> RS Umum Daerah Kesehatan Kerja <br />\
    <img src="styles/legend/_1_35.png" /> RS Umum Daerah Majalaya<br />\
    <img src="styles/legend/_1_36.png" /> RS Umum Daerah Oto Iskandar Di Nata<br />\
    <img src="styles/legend/_1_37.png" /> RS Umum Karya Pangalengan Bhakti Seha<br />\
    <img src="styles/legend/_1_38.png" /> RS Umum TNI AU Lanud Sulaiman<br />\
    <img src="styles/legend/_1_39.png" /> RS Unggul Karsa Medika<br />\
    <img src="styles/legend/_1_40.png" /> RS Unpad Bandung<br />\
    <img src="styles/legend/_1_41.png" /> RSIA Al-Islam<br />\
    <img src="styles/legend/_1_42.png" /> RSIA Harapan Bunda Bandung<br />\
    <img src="styles/legend/_1_43.png" /> RSIA Humana Prima<br />\
    <img src="styles/legend/_1_44.png" /> RSIA Kota Bandung<br />\
    <img src="styles/legend/_1_45.png" /> RSIA Limijati<br />\
    <img src="styles/legend/_1_46.png" /> RSIA Melinda<br />\
    <img src="styles/legend/_1_47.png" /> RSUD Kota Bandung<br />\
    <img src="styles/legend/_1_48.png" /> <br />'
        });
var format_Bufferbuffered_2 = new ol.format.GeoJSON();
var features_Bufferbuffered_2 = format_Bufferbuffered_2.readFeatures(json_Bufferbuffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bufferbuffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bufferbuffered_2.addFeatures(features_Bufferbuffered_2);
var lyr_Bufferbuffered_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bufferbuffered_2, 
                style: style_Bufferbuffered_2,
                popuplayertitle: "Buffer — buffered",
                interactive: false,
    title: 'Buffer — buffered<br />\
    <img src="styles/legend/Bufferbuffered_2_0.png" /> RS Advent Bandung<br />\
    <img src="styles/legend/Bufferbuffered_2_1.png" /> RS Al-Islam Bandung<br />\
    <img src="styles/legend/Bufferbuffered_2_2.png" /> RS AMC<br />\
    <img src="styles/legend/Bufferbuffered_2_3.png" /> RS Cicendo<br />\
    <img src="styles/legend/Bufferbuffered_2_4.png" /> RS Dr. H.A Rotinsulu<br />\
    <img src="styles/legend/Bufferbuffered_2_5.png" /> RS Dr. Hasan Sadikin<br />\
    <img src="styles/legend/Bufferbuffered_2_6.png" /> RS Dr. M. Salamun<br />\
    <img src="styles/legend/Bufferbuffered_2_7.png" /> RS Gigi Mulut Bandung<br />\
    <img src="styles/legend/Bufferbuffered_2_8.png" /> RS Halmahera Siaga<br />\
    <img src="styles/legend/Bufferbuffered_2_9.png" /> RS Hermina Arcamanik<br />\
    <img src="styles/legend/Bufferbuffered_2_10.png" /> RS Hermina Pasteur<br />\
    <img src="styles/legend/Bufferbuffered_2_11.png" /> RS Hermina Soreang<br />\
    <img src="styles/legend/Bufferbuffered_2_12.png" /> RS Immanuel<br />\
    <img src="styles/legend/Bufferbuffered_2_13.png" /> RS Kebon Jati<br />\
    <img src="styles/legend/Bufferbuffered_2_14.png" /> RS MAYAPADA<br />\
    <img src="styles/legend/Bufferbuffered_2_15.png" /> RS Melinda 2<br />\
    <img src="styles/legend/Bufferbuffered_2_16.png" /> RS Muhammadiyah Bandung<br />\
    <img src="styles/legend/Bufferbuffered_2_17.png" /> RS Muhammadiyah Bandung Selatan<br />\
    <img src="styles/legend/Bufferbuffered_2_18.png" /> RS Oetomo<br />\
    <img src="styles/legend/Bufferbuffered_2_19.png" /> RS Pindad<br />\
    <img src="styles/legend/Bufferbuffered_2_20.png" /> RS R.A Habibie<br />\
    <img src="styles/legend/Bufferbuffered_2_21.png" /> RS Rajawali<br />\
    <img src="styles/legend/Bufferbuffered_2_22.png" /> RS Santo Borromeus<br />\
    <img src="styles/legend/Bufferbuffered_2_23.png" /> RS Santo Yusup<br />\
    <img src="styles/legend/Bufferbuffered_2_24.png" /> RS Santosa Bandung Centra<br />\
    <img src="styles/legend/Bufferbuffered_2_25.png" /> RS Santosa Bandung Kopo<br />\
    <img src="styles/legend/Bufferbuffered_2_26.png" /> RS Sariningsih<br />\
    <img src="styles/legend/Bufferbuffered_2_27.png" /> RS Sartika Asih<br />\
    <img src="styles/legend/Bufferbuffered_2_28.png" /> RS Umum Bina Sehat<br />\
    <img src="styles/legend/Bufferbuffered_2_29.png" /> RS Umum Bungsu<br />\
    <img src="styles/legend/Bufferbuffered_2_30.png" /> RS Umum Daerah Al Ihsan<br />\
    <img src="styles/legend/Bufferbuffered_2_31.png" /> RS Umum Daerah Bedas Cimaung<br />\
    <img src="styles/legend/Bufferbuffered_2_32.png" /> RS Umum Daerah Bedas Kertasari<br />\
    <img src="styles/legend/Bufferbuffered_2_33.png" /> RS Umum Daerah Cicalengka<br />\
    <img src="styles/legend/Bufferbuffered_2_34.png" /> RS Umum Daerah Kesehatan Kerja <br />\
    <img src="styles/legend/Bufferbuffered_2_35.png" /> RS Umum Daerah Majalaya<br />\
    <img src="styles/legend/Bufferbuffered_2_36.png" /> RS Umum Daerah Oto Iskandar Di Nata<br />\
    <img src="styles/legend/Bufferbuffered_2_37.png" /> RS Umum Karya Pangalengan Bhakti Seha<br />\
    <img src="styles/legend/Bufferbuffered_2_38.png" /> RS Umum TNI AU Lanud Sulaiman<br />\
    <img src="styles/legend/Bufferbuffered_2_39.png" /> RS Unggul Karsa Medika<br />\
    <img src="styles/legend/Bufferbuffered_2_40.png" /> RS Unpad Bandung<br />\
    <img src="styles/legend/Bufferbuffered_2_41.png" /> RSIA Al-Islam<br />\
    <img src="styles/legend/Bufferbuffered_2_42.png" /> RSIA Harapan Bunda Bandung<br />\
    <img src="styles/legend/Bufferbuffered_2_43.png" /> RSIA Humana Prima<br />\
    <img src="styles/legend/Bufferbuffered_2_44.png" /> RSIA Kota Bandung<br />\
    <img src="styles/legend/Bufferbuffered_2_45.png" /> RSIA Limijati<br />\
    <img src="styles/legend/Bufferbuffered_2_46.png" /> RSIA Melinda<br />\
    <img src="styles/legend/Bufferbuffered_2_47.png" /> RSUD Kota Bandung<br />\
    <img src="styles/legend/Bufferbuffered_2_48.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr_Bufferbuffered_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr_Bufferbuffered_2];
lyr__1.set('fieldAliases', {'fid': 'fid', 'latitude': 'latitude', 'longitude': 'longitude', 'Nama': 'Nama', 'Gambar': 'Gambar', 'Alamat': 'Alamat', 'Tipe ': 'Tipe ', 'Kapasitas': 'Kapasitas', 'Kabupaten': 'Kabupaten', });
lyr_Bufferbuffered_2.set('fieldAliases', {'fid': 'fid', 'latitude': 'latitude', 'longitude': 'longitude', 'Nama': 'Nama', 'Gambar': 'Gambar', 'Alamat': 'Alamat', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Nama': 'TextEdit', 'Gambar': 'ExternalResource', 'Alamat': 'TextEdit', 'Tipe ': '', 'Kapasitas': '', 'Kabupaten': '', });
lyr_Bufferbuffered_2.set('fieldImages', {'fid': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Nama': 'TextEdit', 'Gambar': 'TextEdit', 'Alamat': 'TextEdit', });
lyr__1.set('fieldLabels', {'fid': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Nama': 'inline label - always visible', 'Gambar': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Tipe ': 'inline label - always visible', 'Kapasitas': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', });
lyr_Bufferbuffered_2.set('fieldLabels', {'fid': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Nama': 'inline label - always visible', 'Gambar': 'inline label - always visible', 'Alamat': 'inline label - always visible', });
lyr_Bufferbuffered_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});