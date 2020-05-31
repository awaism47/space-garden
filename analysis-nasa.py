#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat May 30 19:02:31 2020

@author: awaismunawar
"""

from netCDF4 import Dataset
import numpy as np
import json
from flask import Flask, jsonify
import requests
import matplotlib.pyplot as plt
import cartopy
import meteomatics.api as api
import datetime as dt

#data import
data= Dataset('data-jan.nc4', 'r')

#inspecting data variables
for i in data.variables:
    print(i)
    
lat=data.variables['lat'][:]
lon=data.variables['lon'][:]
soilMoisture=data.variables['SoilMoi0_10cm_inst'][:]

#san francisco
lat_berlin=52.520008
lon_berlin=13.404954

#squared difference
sq_diff_lat=(lat-lat_berlin)**2
sq_diff_lon=(lon-lon_berlin)**2

#identifying the index of the minimum value for lat and lon

min_index_lat=sq_diff_lat.argmin()
min_index_lon=sq_diff_lon.argmin()

location_soil_moisture=data.variables['SoilMoi0_10cm_inst'][0,min_index_lat,min_index_lon]

print(location_soil_moisture)