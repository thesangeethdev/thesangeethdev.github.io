package com.sangeeth.portfolio

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.safeContentPadding
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import org.jetbrains.compose.resources.painterResource

import portfolio.shared.generated.resources.Res
import portfolio.shared.generated.resources.compose_multiplatform

@Composable
@Preview
fun App() {
    MaterialTheme {
        var selectedSection by remember { mutableStateOf("Summary") }
        var showContent by remember { mutableStateOf(false) }
        Column(
            modifier = Modifier
                .background(Color(0xFFFFFEB4))
                .safeContentPadding()
                .fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
        ) {
            RetroHeader()
            Row(modifier = Modifier.fillMaxWidth()) {
                Sidebar(
                    sections = listOf("Summary", "LinkedIn", "GitHub", "Certifications", "Google Play", "Experiences"),
                    selected = selectedSection,
                    onSelected = { selectedSection = it }
                )
            }
        }
    }
}