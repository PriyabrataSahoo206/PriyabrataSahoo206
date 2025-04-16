<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RaktSetu - Blood Bank Admin</title>
    <style>
        :root {
            --primary: #e74c3c;
            --primary-dark: #c0392b;
            --secondary: #34495e;
            --light: #ecf0f1;
            --gray: #95a5a6;
            --success: #27ae60;
            --warning: #f39c12;
            --danger: #c0392b;
            --white: #ffffff;
            --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
            color: #333;
            display: flex;
            min-height: 100vh;
        }
        
        .sidebar {
            width: 250px;
            background-color: var(--secondary);
            color: white;
            padding-top: 20px;
        }
        
        .sidebar-header {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 0 20px 20px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            margin-bottom: 20px;
        }
        
        .logo-icon {
            font-size: 24px;
        }
        
        .logo-text {
            font-weight: bold;
            font-size: 18px;
        }
        
        .nav-menu {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        
        .nav-item {
            padding: 12px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .nav-item:hover {
            background-color: rgba(255,255,255,0.1);
        }
        
        .nav-item.active {
            background-color: rgba(255,255,255,0.2);
            border-left: 4px solid var(--primary);
        }
        
        .nav-icon {
            font-size: 18px;
            width: 20px;
            text-align: center;
        }
        
        .main-content {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }
        
        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
        }
        
        .page-title {
            font-size: 24px;
            font-weight: bold;
            color: var(--secondary);
        }
        
        .user-profile {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: var(--gray);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        .user-name {
            font-weight: 500;
        }
        
        .dashboard-summary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .summary-card {
            background-color: white;
            border-radius: 10px;
            box-shadow: var(--shadow);
            padding: 20px;
        }
        
        .summary-title {
            color: var(--gray);
            font-size: 14px;
            margin-bottom: 10px;
        }
        
        .summary-value {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 5px;
        }
        
        .summary-change {
            font-size: 12px;
            color: var(--success);
        }
        
        .content-section {
            background-color: white;
            border-radius: 10px;
            box-shadow: var(--shadow);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .section-title {
            font-size: 18px;
            font-weight: bold;
            color: var(--secondary);
        }
        
        .section-action {
            background-color: var(--primary);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 500;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
        }
        
        th, td {
            padding: 12px 15px;
            text-align: left;
            border-bottom: 1px solid #eee;
        }
        
        th {
            background-color: #f8f9fa;
            font-weight: 600;
        }
        
        .status-indicator {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-right: 5px;
        }
        
        .status-good {
            background-color: var(--success);
        }
        
        .status-warning {
            background-color: var(--warning);
        }
        
        .status-critical {
            background-color: var(--danger);
        }
        
        .blood-stock-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .blood-type-card {
            background-color: #f8f9fa;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
        }
        
        .blood-type {
            font-size: 20px;
            font-weight: bold;
            color: var(--primary);
            margin-bottom: 10px;
        }
        
        .blood-units {
            font-size: 24px;
            font-weight: bold;
        }
        
        .blood-status {
            font-size: 12px;
            margin-top: 5px;
        }
        
        .low-stock {
            color: var(--warning);
        }
        
        .critical-stock {
            color: var(--danger);
        }
        
        .button-row {
            display: flex;
            gap: 10px;
            margin-top: 15px;
        }
        
        .btn-sm {
            padding: 5px 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
        }
        
        .btn-primary {
            background-color: var(--primary);
            color: white;
        }
        
        .btn-secondary {
            background-color: var(--secondary);
            color: white;
        }
    </style>
</head>
<body>
    <div class="sidebar">
        <div class="sidebar-header">
            <div class="
