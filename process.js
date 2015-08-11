// pm2 watch file instructions
// this allows pm2 to recognize when a change has been made to root
// and then restart the app
// processes.json:
    {
      "apps" : [{
        "name"        : "GetFacts",
        "script"      : "bin/www",
        "log_date_format"  : "YYYY-MM-DD HH:mm Z",
      }]
    }
