
from selenium import webdriver
import openpyxl
import time
import os
import csv
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import ElementNotInteractableException
from bs4 import BeautifulSoup

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
options.add_experimental_option("detach", True)
options.add_argument('lang=ko_KR')
chromedriver_path = r"C:\Users\Jeon_YJ\Desktop\Capston_project\Capstone-Design\chromedriver.exe"
driver = webdriver.Chrome(os.path.join(
    os.getcwd(), chromedriver_path), options=options)
options.add_argument('headless')
# chromedriver 열기
 
gu_list = ['마포구','서대문구','은평구','종로구','중구','용산구','성동구','광진구',
           '동대문구','성북구','강북구','도봉구','노원구','중랑구','강동구','송파구',
           '강남구','서초구','관악구','동작구','영등포구','금천구','구로구','양천구','강서구']

def search():
    fileName ='cafe_all.csv'
    for index,gu_name in enumerate(gu_list):
        print(gu_name)
        
        file = open(fileName, 'w', encoding='utf-8')
        searchbox = driver.find_element_by_xpath('//*[@id="search.keyword.query"]')
        searchbox.send_keys(gu_name+'카페')
        driver.find_element_by_xpath(
        '//*[@id="search.keyword.submit"]').send_keys(Keys.ENTER)  # Enter로 검색
        time.sleep(2)

        driver.find_element_by_xpath(
            '//*[@id="info.main.options"]/li[2]/a').send_keys(Keys.ENTER)  # 장소탭으로 이동

        # 여러 페이지에서 반복하기
        try:
            i = 2
            for page in range(0, 10):
                html = driver.page_source
                soup = BeautifulSoup(html, 'html.parser')
                place_lists = soup.select(
                    '.placelist > .PlaceItem')  # 장소 목록 list
                crawling(place_lists,fileName)
                print("완료")

                # 페이지 넘기기
                xPath = '//*[@id="info.search.page.no' + str(i) + '"]'
                driver.find_element_by_xpath(xPath).send_keys(Keys.ENTER)
                time.sleep(1)
                if i % 5 == 0:
                    # 페이지 넘기기
                    xPath = '//*[@id="info.search.page.next"]'
                    driver.find_element_by_xpath(xPath).send_keys(Keys.ENTER)
                    time.sleep(1)
                    i = 0
                    print("완료")
                i += 1

        except ElementNotInteractableException:
            print('not found')
        finally:
            searchbox.clear()


def crawling(placeLists,fileName):

    for place in placeLists:
        info = []
        name = place.select('.head_item>.tit_name>.link_name')[0].text
        score = place.select('.rating>.score>.num')[0].text
        link = place.select('.contact>.moreview')[0]['href']
        address = place.select('.addr')[0].text
        hour = place.select('.info_item > .openhour > p > a')[0].text
        info.append(name)
        info.append(score)
        info.append(hour)
        info.append(link)
        info.append(address)
        info.append()
        lst.append(info)
        
    f = open(fileName, "w", encoding="utf-8-sig", newline="")
    writercsv = csv.writer(f)
    header = ['Name', 'Score','Time', 'Link', 'Addr']
    writercsv.writerow(header)
    for i in lst:
        writercsv.writerow(i)


global filename
lst = []
url = "https://map.kakao.com/"
driver.get(url)
driver.implicitly_wait(4)  # 렌더링 될때까지 기다린다 4초

search()

driver.quit()
