import pytest
from scapy.all import Dot11, Dot11Beacon, Dot11Elt, RadioTap

# Import the function to be tested
from python_scripts.Wifi_Cracker import get_info

def test_get_info_with_beacon():
    pkt = RadioTap() / Dot11(addr2="00:11:22:33:44:55") / Dot11Beacon() / Dot11Elt(ID='SSID', info=b'TestSSID') / Dot11Elt(ID='DSset', info=chr(6).encode())
    pkt.dBm_AntSignal = -50
    
    expected_result = {
        'BSSID': "00:11:22:33:44:55",
        'SSID': 'TestSSID',
        'dBm_signal': -50,
        'channel': 6
    }
    
    assert get_info(pkt) == expected_result

def test_get_info_with_hidden_ssid():
    pkt = RadioTap() / Dot11(addr2="00:11:22:33:44:55") / Dot11Beacon() / Dot11Elt(ID='SSID', info=b'') / Dot11Elt(ID='DSset', info=chr(6).encode())
    pkt.dBm_AntSignal = -50
    
    expected_result = {
        'BSSID': "00:11:22:33:44:55",
        'SSID': 'Hidden SSID',
        'dBm_signal': -50,
        'channel': 6
    }
    
    assert get_info(pkt) == expected_result

def test_get_info_without_beacon():
    pkt = RadioTap() / Dot11(addr2="00:11:22:33:44:55")
    
    assert get_info(pkt) is None

def test_get_info_without_dBm_AntSignal():
    pkt = RadioTap() / Dot11(addr2="00:11:22:33:44:55") / Dot11Beacon() / Dot11Elt(ID='SSID', info=b'TestSSID') / Dot11Elt(ID='DSset', info=chr(6).encode())
    
    expected_result = {
        'BSSID': "00:11:22:33:44:55",
        'SSID': 'TestSSID',
        'dBm_signal': 'N/A',
        'channel': 6
    }
    
    assert get_info(pkt) == expected_result

def test_get_info_without_channel_info():
    pkt = RadioTap() / Dot11(addr2="00:11:22:33:44:55") / Dot11Beacon() / Dot11Elt(ID='SSID', info=b'TestSSID')
    pkt.dBm_AntSignal = -50
    
    expected_result = {
        'BSSID': "00:11:22:33:44:55",
        'SSID': 'TestSSID',
        'dBm_signal': -50,
        'channel': 'N/A'
    }
    
    assert get_info(pkt) == expected_result