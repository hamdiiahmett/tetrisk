# Tetrisk 🧩

**Tetrisk**, klasik blok yerleştirme bulmacalarına heyecan verici bir "Risk" mekaniği ve retro görsel estetik ekleyen modern bir web oyunudur.

![Oyun Ekran Görüntüsü](screenshot.png)


## 🎮 Oynanış ve Özellikler

Tetrisk, klasik 10x10 blok yerleştirme mantığına dayanır ancak oyuncuyu sürekli tetikte tutan ek özelliklere sahiptir:

* **Sürükle & Bırak Mekaniği:** Rastgele gelen 3 farklı şekli 10x10'luk alana stratejik olarak yerleştirin.
* **Risk Sistemi:** Belirli aralıklarla (veya 5000 puandan sonra zorunlu olarak) şansınızı denemeniz gerekir.
    * 🍀 **Şanslı Kart:** Ekstra puan kazandırır.
    * 💀 **Şanssız Kart:** Puan siler ve oyun alanına rastgele "Donmuş Bloklar" (Frozen Blocks) yerleştirir.
* **Donmuş Bloklar:** Bu blokları yok etmek için hem satırı hem de sütunu aynı anda doldurmanız gerekir.
* **3 Farklı Görsel Mod:**
    1.  **Standart:** Temiz ve modern görünüm.
    2.  **Kağıt (Paper):** Elle çizilmiş eskiz defteri estetiği.
    3.  **Neon:** Parlak, siberpunk tarzı karanlık mod.
* **Dinamik Ses Sentezi:** Harici ses dosyası kullanmadan, `Web Audio API` ile oluşturulan gerçek zamanlı ses efektleri.

## 🛠 Kullanılan Teknolojiler

Bu proje aşağıdaki teknolojiler kullanılarak geliştirilmiştir:

* **Oyun Motoru:** [Phaser 3](https://phaser.io/)
* **Programlama Dili:** JavaScript (ES6+)
* **Stil:** CSS3 (CSS Variables kullanılarak dinamik tema yönetimi)
* **PWA (Progressive Web App):** Mobil cihazlara uygulama gibi kurulabilir, çevrimdışı çalışabilir.
* **Retro Efektler:** CRT ekran tarama çizgileri (Scanlines) ve Vinyet efektleri.

## 🤖 Geliştirme Süreci

Bu proje, yapay zeka asistanı **Antigravity** ile yapılan pair-programming (eşli programlama) çalışmaları sonucunda geliştirilmiştir. Oyun mantığı, görsel estetik kararları ve kod optimizasyonları yapay zeka iş birliği ile gerçekleştirilmiştir.

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için:

1.  Bu depoyu klonlayın:
    ```bash
    git clone [https://github.com/hamdiiahmett/tetrisk.git](https://github.com/KULLANICI_ADINIZ/tetrisk.git)
    ```
2.  Klasörün içine girin ve `index.html` dosyasını bir tarayıcıda açın.
    *Not: PWA özelliklerini ve bazı Phaser dokularını düzgün görebilmek için bir yerel sunucu (Live Server vb.) kullanmanız önerilir.*

## 📜 Lisans

Bu proje açık kaynaklıdır ve MIT lisansı altında sunulmaktadır.
