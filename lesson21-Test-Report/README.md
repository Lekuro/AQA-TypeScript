## For Windows 11 install Wsl

### - Переконайтеся, що у BIOS/UEFI ввімкнено Intel VT-x або AMD-V.

### - Натисніть Win + X → виберіть Windows PowerShell (Admin) або Terminal (Admin).

```
wsl --install
```

```
wsl --version
```

### to check virtualization

```
systeminfo
```

### Встановлюємо Docker <https://www.docker.com/get-started/>

#### список усіх дистрибутивів та їх версій

```
wsl -l -v
```

### is port free

```
netstat -a | findstr "8080"
```
